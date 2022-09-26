const { Subscription, User, Channel } = require('../models');

module.exports = {
    subscribe: async (req, res, next) => {
        try {
            const { user_id, channel_id } = req.body;

            const user = await User.findOne({ where: { id: user_id } });
            if (!user) {
                return res.status(404).json({
                    status: false,
                    message: `user with id ${user_id} is doesn't exist`,
                    data: null
                });
            }

            const channel = await Channel.findOne({ where: { id: channel_id } });
            if (!channel) {
                return res.status(404).json({
                    status: false,
                    message: `channel with id ${channel_id} is doesn't exist`,
                    data: null
                });
            }

            const isSubscribe = await Subscription.findOne({ where: { user_id, channel_id } });
            if (isSubscribe) {
                return res.status(400).json({
                    status: false,
                    message: `you already subsribe!`,
                    data: null
                });
            }

            const subscription = await Subscription.create({
                user_id, channel_id
            });

            return res.status(201).json({
                status: true,
                message: `success`,
                data: subscription
            });
        } catch (err) {
            next(err);
        }
    },
    unsubscribe: async (req, res, next) => {
        try {
            const { user_id, channel_id } = req.body;

            const subscribe = await Subscription.findOne({ where: { user_id, channel_id } });
            if (!subscribe) {
                return res.status(404).json({
                    status: false,
                    message: `record not fount`,
                    data: null
                });
            }

            const destroy = await Subscription.destroy({ where: { user_id, channel_id } });
            return res.status(404).json({
                status: false,
                message: `success`,
                data: destroy
            });
        } catch (err) {
            next(err);
        }
    }
};