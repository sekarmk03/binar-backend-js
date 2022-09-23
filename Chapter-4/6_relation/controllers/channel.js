const { User, Channel, Video } = require('../models');

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
            next(err);
        }
    },
    index: async (req, res, next) => {
        try {
            const channels = await Channel.findAll();

            return res.status(200).json({
                status: true,
                message: "success",
                data: channels
            });
        } catch (err) {
            next(err);
        }
    },
    show: async (req, res, next) => {
        try {
            const { channel_id } = req.params;

            const channel = await Channel.findOne({
                where: { id: channel_id },
                include: [
                    {
                    model: Video,
                    as:'videos',
                    attributes :['title', 'description']
                },
                {
                    model: User,
                    as:'user',
                    attributes :['name', 'email']
                }]
            });
            if (!channel) {
                return res.status(404).json({
                    status: false,
                    message: `channel with id ${channel_id} is doesn't exist`,
                    data: null
                });
            }

            return res.status(200).json({
                status: true,
                message: "success",
                data: channel
            });

        } catch (err) {
            next(err);
        }
    }
};