const express = require('express');
const app = express();
const port = 3000;
<<<<<<< HEAD
const router = require('./routes');
app.use(express.json());
const morgan = require('morgan')
app.use(morgan('dev'))

app.set('view engine','ejs')

function logger(req, res, next) {
    console.log(req.method, req.url);
    next();
}


app.use(logger);
app.use(router);

app.get('/', (req, res) => {
    // return res.json({
=======

app.use(express.json());
app.set('view engine', 'ejs');
// function logger(req, res, next) {
//     console.log(req.method, req.url);
//     next();
// }
// app.use(logger);

const morgan = require('morgan');
app.use(morgan('dev'));

const router = require('./routes');
app.use(router);

app.get('/', (req, res) => {
    // return res.status(200).json({
>>>>>>> b19ec3eef9434986e9fe010891e01f7f00d1f64d
    //     status: 'success',
    //     message: 'welcome to coba express'
    // });

<<<<<<< HEAD
    return res.render("welcome")
});

app.get('/inierror',(req,res)=>{
    inierror
})

//500 error handler
app.use((err,req,res,next)=>{
    res.status(500).json(
        {
            status:"failed",
            message:"error message"
        }
    )
})
=======
    return res.render('welcome');
});

app.get('/iniError', (req, res) => {
    iniError;
});

// 500 handler error
app.use((err, req, res, next) => {
    res.status(500).json({
        status: 'failed',
        message: err.message
    });
});

// 404 error handler
app.use((req, res, next) => {
    res.status(404).json({
        status: 'failed',
        message: 'Are you lost?'
    });
});
>>>>>>> b19ec3eef9434986e9fe010891e01f7f00d1f64d

app.use((req,res,next)=>{
    res.status(400).json(
        {
            status:"failed",
            message:"are you lost"
        }
    )
})
app.listen(port, () => console.log('listening on port', port));