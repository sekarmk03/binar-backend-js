const { User } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {
    JWT_SIGNATURE_KEY
} = process.env;

module.exports = {
    register: async (req, res, next) => {
        try {
            const { name, email, password } = req.body;

            const existUser = await User.findOne({ where: { email: email } });
            if (existUser) {
                return res.status(409).json({
                    status: false,
                    message: 'email already used!'
                });
            }

            const encryptedPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                name,
                email,
                password: encryptedPassword
            });

            return res.status(201).json({
                status: false,
                message: 'success',
                data: {
                    name: user.name,
                    email: user.email
                }
            });
        } catch (err) {
            next(err);
        }
    },

    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;

            const user = await User.findOne({ where: { email: email } });
            if (!user) {
                return res.status(400).json({
                    status: false,
                    message: 'email or password doesn\'t match!'
                });
            }

            const correct = await bcrypt.compare(password, user.password);
            if (!correct) {
                return res.status(400).json({
                    status: false,
                    message: 'email or password doesn\'t match!'
                });
            }

            // generate token
            payload = {
                id: user.id,
                name: user.name,
                email: user.email,
            };
            const token = jwt.sign(payload, JWT_SIGNATURE_KEY);

            return res.status(200).json({
                status: false,
                message: 'success',
                data: {
                    token: token
                }
            });
        } catch (err) {
            next(err);
        }
    },

    whoami: (req, res, next) => {
        const user = req.user;

        try {
            return res.status(200).json({
                status: false,
                message: 'success',
                data: user
            });
        } catch (err) {
            next(err);
        }
    },
 
        changePassword: async (req, res, next) => {
            try {
                const { oldPassword, newPassword, confirmNewPassword } = req.body;
                
                if (newPassword !== confirmNewPassword) {
                    return res.status(422).json({
                        status: false,
                        message: 'new password and confirm new password doesnt match!'
                    });
                }
    
                const user = await User.findOne({ where: { id: req.user.id } });
                if (!user) return res.status(404).json({ success: false, message: 'User not found!' });
                
                const correct = await bcrypt.compare(oldPassword, user.password);
                if (!correct) {
                    return res.status(400).json({
                        status: false,
                        message: 'old password does not match!'
                    });
                }
    
                const encryptedPassword = await bcrypt.hash(newPassword, 10);
                const updatedUser = await User.update({
                    password: encryptedPassword
                }, {
                    where: {
                        id: user.id
                    }
                });
    
                return res.status(200).json({
                    status: false,
                    message: 'success',
                    data: updatedUser
                });
    
            } catch (err) {
                next(err);
            }
}
}