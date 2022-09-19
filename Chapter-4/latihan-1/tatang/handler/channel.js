const external = require('../external');
const db = external.postgres;

db.connect();

module.exports = {
    getChannels: (req, res) => {
        db.query('SELECT * FROM channels', (err, data) => {
            return res.status(200).json(data.rows);
        });
    },
    channelDetails: (req, res) => {

        const { channel_id } = req.params;

        db.query(`SELECT * FROM channels WHERE id = ${channel_id}`, (err, data) => {
            return res.status(200).json(data.rows[0]);
        });
    }
};