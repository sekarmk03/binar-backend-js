const { User } = require('../models');
const bcrypt = require('bcrypt');
const roles = require('../utils/roles');
const passport = require('../utils/passport');

module.exports = {
    registerPage: (req, res) => {
        res.render('register');
    },
    register: async (req, res, next) => {
        try {
            const { name, email, password, role = roles.user } = req.body;

            const exist = await User.findOne({ where: { email } });
            if (exist) {
                return res.render('register');
            }

            const hashed = await bcrypt.hash(password, 10);
            await User.create({
                name: name,
                email: email,
                password: hashed,
                role: role
            });

            res.redirect('/auth/login');
        } catch (err) {
            next(err);
        }
    },

    loginPage: (req, res) => {
        res.render('login');
    },

    login: passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/auth/login',
        failureFlash: true
    })
};