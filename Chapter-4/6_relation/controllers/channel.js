const { User, Channel } = require('../models');

module.exports = {
    create: async (req, res, next) => {
        try {
            const { name, description, user_id } = req.body;

            const user = await User.findOne({ where: { id: user_id } });
            if (!user) {
                return res.status(404).json({
                    status: false,
                    message: `user with id ${user_id} is doesn't exist`,
                    data: null
                });
            }

            const channel = await Channel.create({
                name,
                description,
                user_id
            });

            return res.status(201).json({
                status: true,
                message: "success",
                data: channel
            });

        } catch (err) {
            next(err)
        }
    },
    index: async (req, res, next) => {
        try {

        } catch (err) {
            next(err)
        }
    },
    show: async (req, res, next) => {
        try {
            const { user_id } = request.params;

            const user = await User.findOne({ where: { id: user_id } });
            if (!user) {
                return res.status(404).json({
                    status: false,
                    message: `user with id ${user_id} is doesn't exist`,
                    data: null
                });
            }

            return res.status(201).json({
                status: true,
                message: "success",
                data: channel
            });

        } catch (err) {
            next(err)
        }
    }
};