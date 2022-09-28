const { kelas_user } = require('../db/models');
const bcrypt = require('bcrypt');
const { response } = require('express');

module.exports = {
    index: async (req, res, next) => {
        try {
            const kelas_user_data = await kelas_user.findAll({raw: true});
            return res.status(200).json({
                status: true,
                message: 'Get all data successfully',
                data: kelas_user_data
            })
        } catch (err) {
            next(err);
        }
    },
    create: async (req, res, next) => {
        try {
            const { name, email, password } = req.body;

            const exist = await kelas_user.findOne({ where: { email } });
            if (exist) {
                return res.status(400).json({
                    status: false,
                    message: 'email already used!',
                    data: null
                });
            }

            const encrypted = await bcrypt.hash(password, 10);
            const user = await kelas_user.create({
                name,
                email,
                password: encrypted
            });

            return res.status(201).json({
                status: true,
                message: 'success',
                data: {
                    id: user.id,
                    name: user.name,
                    email: user.email
                }
            });
        } catch (err) {
            next(err);
        }
    }
};