const express = require('express');
const app = express();
const port = 3000;
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
    //     status: 'success',
    //     message: 'welcome to coba express'
    // });

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

app.use((req,res,next)=>{
    res.status(400).json(
        {
            status:"failed",
            message:"are you lost"
        }
    )
})
app.listen(port, () => console.log('listening on port', port));