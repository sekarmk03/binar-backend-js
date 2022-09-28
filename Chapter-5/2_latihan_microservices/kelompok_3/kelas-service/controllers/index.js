const mentor = require('./mentor');
const kelas = require('./kelas');
const kelas_user = require('./kelas_user');

module.exports = {
    exception: (err, req, res, next) => {
        res.render('server-error', { error: err.message });
    },
    notFound: (req, res, next) => {
        res.render('gaada');
    },
    mentor,
    kelas,
    kelas_user
};