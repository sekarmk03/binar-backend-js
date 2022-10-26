module.exports = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }

    return redirect('/auth/login');
};