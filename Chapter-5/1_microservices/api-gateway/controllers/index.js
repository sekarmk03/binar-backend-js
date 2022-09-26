const adapter = require('../external/apiadapter');
const {
    USER_SERVICE_HOST
} = process.env;

const api = adapter(USER_SERVICE_HOST);

module.exports = {
    register: async (req, res, next) => {
        try {
            const { name, email, password } = req.body;
            const { status, data } = await api.post('/create', { name, email, password });

            if (!data.data.status) {
                return res.status(status).json({
                    status: data.data.status,
                    message: data.data.message,
                    data: data.data.data
                });
            }

            res.status(201).json({
                status: true,
                message: 'success',
                data: response.data.data
            });
        } catch (err) {
            const { status, data } = err.response;
            if (!status) {
                next(err);
            }
            res.status(status).json(data);
        }
    },

    login: async (req, res, next) => {
        try {

        } catch (err) {
            const { status, data } = err.response;
            if (!status) {
                next(err);
            }
            res.status(status).json(data);
        }
    }
};