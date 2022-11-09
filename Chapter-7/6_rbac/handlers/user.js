
const { User } = require('../models');

module.exports = {
    updateAvatar: async (req, res, next) => {
        try {
            const user = req.user;
            const { file_url } = req.body;

            const updatedUser = await User.update({
                avatar: file_url
            }, {
                where: {
                    id: user.id
                }
            });

            return res.status(200).json({
                status: false,
                message: 'success',
                data: updatedUser
            });
        } catch (err) {
            next(err);
        }
    }
};