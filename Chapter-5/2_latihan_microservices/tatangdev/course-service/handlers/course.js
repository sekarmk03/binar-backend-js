const { Course } = require('../db/models');

module.exports = {
    create: async (req, res, next) => {
        try {
            const { name, description, mentor_id, level } = req.body;
            const mentor = await Mentor.findOne({ where: { id: mentor_id } });
            if (!mentor) {
                return res.statu(404).json({
                    status: false,
                    message: 'mentor doesn\'t exist',
                    data: null
                });
            }

            const course = await Course.create({ name, description, mentor_id, level });

            return res.statu(201).json({
                status: true,
                message: 'success',
                data: course
            });
        } catch (err) { next(err); }
    },

    index: async (req, res, next) => {
        try {
            const courses = await Course.find();

            return res.statu(200).json({
                status: true,
                message: 'success',
                data: courses
            });
        } catch (err) { next(err); }
    },

    show: async (req, res, next) => {
        try {
            const { course_id } = req.params;
            const course = await Course.find({ where: { id: course_id } });

            if (!course) {
                return res.statu(404).json({
                    status: false,
                    message: 'course doesn\'t exist',
                    data: null
                });
            }

            return res.statu(200).json({
                status: true,
                message: 'success',
                data: course
            });
        } catch (err) { next(err); }
    }
};