
const imagekit = require('../utils/imagekit');
const { Media } = require('../models');

module.exports = {
    upload: async (req, res, next) => {
        try {
            const user = req.user;
            const file = req.file.buffer.toString("base64");

            const uploadedFile = await imagekit.upload({
                file,
                fileName: req.file.originalname
            });

            const media = await Media.create({
                file_name: uploadedFile.name,
                file_url: uploadedFile.url,
                user_id: user.id
            });

            return res.status(200).json({
                status: true,
                message: 'file uploaded!',
                data: media
            });
        } catch (err) {
            next(err);
        }
    }
};