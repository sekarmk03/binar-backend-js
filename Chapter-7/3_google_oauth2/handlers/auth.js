const googleOauth2 = require('../utils/oauth2/google');
const facebookOauth2 = require('../utils/oauth2/facebook');
const { User } = require('../models');
const userType = require('../utils/oauth2/enum');
const jwt = require('jsonwebtoken');

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
            const userExist = await User.findOne({ where: { email: data.email } });

            // if !ada -> simpan data user
            if (!userExist) {
                userExist = await User.create({
                    name: data.name,
                    email: data.email,
                    user_type: userType.google
                });
            }

            // generate token
            const payload = {
                id: userExist.id,
                name: userExist.name,
                email: userExist.email,
                user_type: userExist.user_type,
            };
            const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);

            // return token 
            return res.status(200).json({
                status: true,
                message: 'success',
                data: {
                    user_id: userExist.id,
                    token
                }
            });
        } catch (err) {
            next(err);
        }
    },

    facebook: async (req, res, next) => {
        try {
            const code = req.query.code;

            // form login jika code tidak ada
            if (!code) {
                const url = facebookOauth2.generateAuthURL();
                return res.redirect(url);
            }

            // acces_token
            const access_token = await facebookOauth2.getAccessToken(code);

            // get user info
            const userInfo = await facebookOauth2.getUserInfo(access_token);

            // check apakah user email ada di database
            const userExist = await User.findOne({ where: { email: userInfo.email } });

            // if !ada -> simpan data user
            if (!userExist) {
                userExist = await User.create({
                    name: [userInfo.first_name, userInfo.Last_name].join(' '),
                    email: userInfo.email,
                    user_type: userType.facebook
                });
            }

            // generate token
            const payload = {
                id: userExist.id,
                name: userExist.name,
                email: userExist.email,
                user_type: userExist.user_type,
            };
            const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);

            // return token 
            return res.status(200).json({
                status: true,
                message: 'success',
                data: {
                    user_id: userExist.id,
                    token
                }
            });
        } catch (err) {
            next(err);
        }
    },

    login: async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const userExist = await User.findOne({ where: { email } });

            // if !ada -> simpan data user
            if (!userExist) {
                return res.status(404).json({
                    status: false,
                    message: 'user not found!',
                    data: null
                });
            }

            if (userExist.user_type != userType.basic) {
                return res.status(400).json({
                    status: false,
                    message: `your account is associated with ${userExist.user_type} oauth`,
                    data: null
                });
            }

            // check password
            const passwordMatch = password == userExist.password;
            if (!passwordMatch) {
                return res.status(400).json({
                    status: false,
                    message: 'wrong password!',
                    data: null
                });
            }

            // generate token
            const payload = {
                id: userExist.id,
                name: userExist.name,
                email: userExist.email,
                user_type: userExist.user_type,
            };
            const token = jwt.sign(payload, process.env.JWT_SECRET_KEY);

            // return token 
            return res.status(200).json({
                status: true,
                message: 'success',
                data: {
                    user_id: userExist.id,
                    token
                }
            });
        } catch (err) {
            next(err);
        }
    },

    register: async (req, res, next) => {
        try {
            const { email, password } = req.body;
            const userExist = await User.findOne({ where: { email } });

            // if !ada -> simpan data user
            if (userExist) {
                if (userExist.userType != userType.basic) {
                    return res.status(400).json({
                        status: false,
                        message: `your account is associated with ${userExist.user_type} oauth`,
                        data: null
                    });
                }

                return res.status(400).json({
                    status: false,
                    message: 'email already used!',
                    data: null
                });
            }

            const newUser = await User.create({
                name: [userInfo.first_name, userInfo.Last_name].join(' '),
                email: userInfo.email,
                user_type: userType.basic,
                password: password // hash first then create
            });

            return res.status(200).json({
                status: true,
                message: 'success',
                data: {
                    id: newUser.id,
                    name: newUser.name,
                    email: newUser.email,
                    user_type: newUser.user_type
                }
            });
        } catch (err) {
            next(err);
        }
    }


};