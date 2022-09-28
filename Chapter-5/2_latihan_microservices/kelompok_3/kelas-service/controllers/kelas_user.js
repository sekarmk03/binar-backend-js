const {user} = require('../models');
const bcrypt = require('bcrypt');
const {response} = require('express');

module.exports = {
    index: async (req, res, next) => {
        const usersData = user.findAll({raw:true});
        return res.status(200).json({
            status: true,
            message: 'get all data succeed',
            data: usersData
        });
    },
    findOne: async (req, res, next) => {
        try {
            const where = {};
            const {id, email} = req.params;
            if(id) where.id = id;
            if(email) where.email = email;

            const userData = await user.findOne({where: where});
            if(!userData) {
                return res.status(500).json({
                    status: false,
                    message: 'data not found',
                    data:null
                });
            }

            return res.status(201).json({
                status: true,
                message: 'success',
                data: {
                    id: userData.id,
                    email: userData.email,
                    password: userData.password
                }
            });
        } catch (err) {
            next(err);
        }
    },
    create: async (req, res, next) => {
        try {
            const {name, email, password} = req.body;

            const exist = await user.findOne({where: {email: email}});
            if(exist) {
                return res.status(500).json({
                    status: false,
                    message: 'email already used',
                    data:null
                });
            }

            const userData = await user.create({
                name,
                email,
                password: await bcrypt.hash(password, 10)
            });

            return res.status(201).json({
                status: true,
                message: 'success',
                data: userData
            });
        } catch (err) {
            next(err);
        }
    }
}