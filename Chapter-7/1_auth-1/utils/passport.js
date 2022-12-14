const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const { User } = require('../models');

var options = {};
options.jwtFromRequest = ExtractJwt.fromHeader('authorization');
options.secretOrKey = process.env.JWT_SECRET_KEY;

passport.use(new JwtStrategy(options, async (payload, done) => {
    try {
        const user = await User.findOne({ where: { id: payload.id } });

        if (user) {
            return done(null, user);
        }

        return done(null, null);
    } catch (err) {
        return done(err, null);
    }
}));

module.exports = passport;