const { Channel, Video } = require('../models');

module.exports = {
    create: async (req, res, next) => {
        try {
            const { title, description, channel_id } = req.body;

            const channel = await Channel.findOne({ where: { id: channel_id } });
            if (!channel) {
                return res.status(404).json({
                    status: false,
                    message: `channel with id ${channel_id} is doesn't exist`,
                    data: null
                });
            }

            const video = await Video.create({
                title,
                description,
                channel_id
            });

            return res.status(201).json({
                status: true,
                message: "success",
                data: video
            });

        } catch (err) {
            next(err)
        }
    },
    index: async (req, res, next) => {
        try {
            const videos = await Video.findAll();

            return res.status(200).json({
                status: true,
                message: "success",
                data: videos
            });
        } catch (err) {
            next(err)
        }
    },
    show: async (req, res, next) => {
        try {
            const { video_id } = req.params;

            const video = await Video.findOne({ where: { id: video_id } });
            if (!video) {
                return res.status(404).json({
                    status: false,
                    message: `channel with id ${channel_id} is doesn't exist`,
                    data: null
                });
            }

            return res.status(200).json({
                status: true,
                message: "success",
                data: video
            });

        } catch (err) {
            next(err)
        }
    }
};