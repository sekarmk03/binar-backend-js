const utils = require('../utils');
const http = utils.http(USER_SERVICE_HOST);

module.exports = {
    create: async (req, res, next) => {
        try {
            const { status, data } = http.get('/course/subscribe', req.body);
            res.status(status).json(data);
        } catch (err) {
            if (err.code == 'ECONNREFUSED') {
                err = new Error('service anvailable!');
                return next(err);
            }

            // handle error dari service lain
            if (err.response) {
                const { status, data } = err.response;
                res.status(status).json(data);
            }

            next(err);
        }
    }
};