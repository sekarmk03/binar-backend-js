const user = require('./user');

module.exports = {
    exception: (err, req, res, next) => {
        res.render('server-error', { error: err.message });
    },
    notFound: (req, res, next) => {
        res.render('gaada');
    },
    user
};