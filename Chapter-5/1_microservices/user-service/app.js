require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const router = require('./routes');
const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(router);

const { HTTP_PORT } = process.env;
app.listen(HTTP_PORT, () => console.log('listening on port', HTTP_PORT));