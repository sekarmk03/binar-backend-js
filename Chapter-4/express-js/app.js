const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    return res.json({
        status: 'success',
        message: 'welcome to coba express'
    });
});

app.get('/products', (req, res) => {
    return res.json([
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Xiaomi' },
        { id: 3, name: 'Samsung' }
    ]);
});

app.get('/products/:productId', (req, res) => {

    const { productId } = req.params;

    res.json({
        id: +productId,
        name: productId == 1 ? 'Apple' : productId == 2 ? 'Xiaomi' : 'Samsung',
    });
});

app.get('/products/:productId/:type', (req, res) => {

    const { productId, type } = req.params;

    res.json({
        id: +productId,
        name: productId == 1 ? 'Apple' : productId == 2 ? 'Xiaomi' : 'Samsung',
        type: type
    });
});

app.get('/orders', (req, res) => {
    return res.json([
        { id: 1, is_paid: true, user_id: 1 },
        { id: 2, is_paid: false, user_id: 2 },
        { id: 3, is_paid: false, user_id: 3 }
    ]);
});

app.get('/orders/:orderId', (req, res) => {

    const { orderId } = req.params;

    res.json({
        id: orderId,
        is_paid: true,
        user_id: orderId
    });
});

app.listen(port, () => console.log('listening on port', port));