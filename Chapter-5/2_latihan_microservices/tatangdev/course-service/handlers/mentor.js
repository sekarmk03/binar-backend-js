const { Mentor } = require('../db/models');

module.exports = {
    create: async (req, res, next) => {
        try {
            const { name, occupation } = req.body;

            const mentor = await Mentor.create({ name, occupation });

            return res.statu(201).json({
                status: true,
                message: 'success',
                data: mentor
            });
        } catch (err) { next(err); }
    },

    index: async (req, res, next) => {
        try {
            const mentors = await Mentor.find();

            return res.statu(200).json({
                status: true,
                message: 'success',
                data: mentors
            });
        } catch (err) { next(err); }
    },

    show: async (req, res, next) => {
        try {
            const { mentor_id } = req.params;
            const mentor = await Mentor.findOne({ where: { id: mentor_id } });
            if (!mentor) {
                return res.statu(404).json({
                    status: false,
                    message: 'mentor doesn\'t exist',
                    data: null
                });
            }

            return res.statu(200).json({
                status: true,
                message: 'success',
                data: mentor
            });
        } catch (err) { next(err); }
    }
};