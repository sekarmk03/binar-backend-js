const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(morgan('dev'));

app.listen(port, () => console.log('listening on port', 3000));