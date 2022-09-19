const express = require('express');
const router = express.Router();

// function timeLogger(req, res, next) {
//     console.log('Time:', Date.now());
//     next();
// }
// router.use(timeLogger);

router.get('/products', (req, res) => {
    return res.status(200).json([
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Xiaomi' },
        { id: 3, name: 'Samsung' }
    ]);
});

router.get('/products/:productId', (req, res) => {

    const { productId } = req.params;

    // /products/3?brand=Google
    // /products/3?brand=Google&type=pro
    let { brand, type } = req.query;

    if (!brand) {
        brand = productId == 1 ? 'Apple' : productId == 2 ? 'Xiaomi' : 'Samsung';
    }

    // res.json({
    //     id: +productId,
    //     name: brand,
    //     type: type ? type : null
    // });
    res.render('products/detail', {
        id: +productId,
        name: brand,
        type: type ? type : null
    });
});

router.post('/products', (req, res) => {
    const { name } = req.body;

    res.json(name);
});

module.exports = router;