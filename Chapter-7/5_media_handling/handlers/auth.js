const { User } = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
    register: async (req, res, next) => {
        try {
            const { name, email, password } = req.body;
            const userExist = await User.findOne({ where: { email } });

            // if !ada -> simpan data user
            if (userExist) {
                return res.status(400).json({
                    status: false,
                    message: 'email already used!',
                    data: null
                });
            }

            const hashed = await bcrypt.hash(password, 10);

            const newUser = await User.create({
                name, email, password: hashed
            });

            return res.status(200).json({
                status: true,
                message: 'success',
                data: {
                    id: newUser.id,
                    name: newUser.name,
                    email: newUser.email
                }
            });
        } catch (err) {
            next(err);
        }
    },

    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const userExist = await User.findOne({ where: { email } });

            if (!userExist) {
                return res.status(404).json({
                    status: false,
                    message: 'user not found!',
                    data: null
                });
            }

            // check password
            const passwordMatch = await bcrypt.compare(password, userExist.password);
            if (!passwordMatch) {
                return res.status(400).json({
                    status: false,
                    message: 'wrong password!',
                    data: null
                });
            }

            // generate token
            const payload = {
                id: userExist.id,
                name: userExist.name,
                email: userExist.email,
            };
            const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);

            // return token 
            return res.status(200).json({
                status: true,
                message: 'success',
                data: {
                    user_id: userExist.id,
                    token
                }
            });
        } catch (err) {
            next(err);
        }
    }
};