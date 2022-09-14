const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes');

function logger(req, res, next) {
    console.log(req.method, req.url);
    next();
}

app.use(express.json());
app.use(logger);
app.use(router);

app.get('/', (req, res) => {
    return res.json({
        status: 'success',
        message: 'welcome to coba express'
    });
});


app.listen(port, () => console.log('listening on port', port));