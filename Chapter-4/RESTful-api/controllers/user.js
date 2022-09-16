const data = require('../data.json');

module.exports = {
    getAll: (req, res) => {
        const users = data.users;

        return res.status(200).json({
            status: 'success',
            message: 'success get all data!',
            data: users
        });
    }
};