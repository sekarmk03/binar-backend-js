const googleOauth2 = require('../utils/oauth2/google');

module.exports = {
    google: async (req, res, next) => {
        try {
            const code = req.query.code;

            // form login jika code tidak ada
            if (!code) {
                const url = googleOauth2.generateAuthURL();
                return res.redirect(url);
            }

            // get token
            await googleOauth2.setCredentials(code);

            // get data user
            const { data } = await googleOauth2.getUserData();


            // check apakah user email ada di database
            // if !ada -> simpan data user

            // generate token

            // return token 

            res.send(data);
        } catch (err) {
            next(err);
        }
    }
};