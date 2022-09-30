const { User } = require('../db/models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { JWT_SECRET_KEY } = process.env;

module.exports = {
    register: async (req, res, next) => {
        try {
            const { name, email, password } = process.env;
            const exist = await User.find({ where: { email } });
            if (exist) {
                return res.status(400).json({
                    status: false,
                    message: 'email already used!',
                    data: null
                });
            }

            const encrypted = await bcrypt.hash(password, 10);
            const user = await User.create({
                name,
                email,
                password: encrypted,
                role: 'user'
            });

            return res.status(201).json({
                status: true,
                message: 'success',
                data: {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
            });
        } catch (err) { next(err); }
    },

    login: async (req, res, next) => {
        try {
            const { email, password } = process.env;
            const user = await User.find({ where: { email } });
            if (!user) {
                return res.status(400).json({
                    status: false,
                    message: 'wrong email or password!',
                    data: null
                });
            }

            const match = await bcrypt.compare(password, user.encrypted);
            if (!match) {
                return res.status(400).json({
                    status: false,
                    message: 'wrong email or password!',
                    data: null
                });
            }

            const payload = {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role
            };
            const token = jwt.sign(payload, JWT_SECRET_KEY);

            return res.status(200).json({
                status: true,
                message: 'success',
                data: { token }
            });
        } catch (err) { next(err); }
    }
};