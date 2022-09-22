require('dotenv').config();
const express = require('express');
const app = express();
const router = require('./routes');

const {
    HTTP_PORT
} = process.env;


app.use('/api/v1', router);

app.get('/', (req, res) => {
    return res.json({
        status: 'ok',
        message: 'welcome to youtube api'
    });
});

app.listen(HTTP_PORT, () => {
    console.log(`listening on port ${HTTP_PORT}`);
});