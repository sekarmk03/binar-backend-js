require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const router = require('./routes');
const app = express();
const {
    USER_SERVICE_HTTP_PORT = 3000
} = process.env;

app.use(express.json());
app.use(morgan('dev'));
app.use(router);

app.use((req, res, next) => {
    return res.status(404).json({
        status: false,
        message: 'are you lost?',
        data: null
    });
});

app.use((err, req, res, next) => {
    console.log(err);
    return res.status(404).json({
        status: false,
        message: err.message,
        data: null
    });
});

app.listen(USER_SERVICE_HTTP_PORT, () => console.log('listening on port :', USER_SERVICE_HTTP_PORT));