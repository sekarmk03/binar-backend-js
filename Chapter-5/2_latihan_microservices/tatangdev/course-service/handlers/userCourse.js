const { Course, Mentor, UserCourse } = require('../db/models');

module.exports = {
    create: async (req, res, next) => {
        try {
            const { user_id, mentor_id } = req.body;
            const mentor = await Mentor.findOne({ where: { id: mentor_id } });
            if (!mentor) {
                return res.statu(404).json({
                    status: false,
                    message: 'mentor doesn\'t exist',
                    data: null
                });
            }

            const course = await Course.findOne({ where: { id: course_id } });
            if (!course) {
                return res.statu(404).json({
                    status: false,
                    message: 'course doesn\'t exist',
                    data: null
                });
            }

            const userCourse = await UserCourse.create({ user_id, course_id });

            return res.statu(201).json({
                status: true,
                message: 'success',
                data: userCourse
            });
        } catch (err) { next(err); }
    }
};