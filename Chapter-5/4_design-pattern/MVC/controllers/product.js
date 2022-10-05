const { Product } = require('../models');

module.exports = {
    create: (req, res, next) => {
        res.render('product/create');
    },
    store: async (req, res, next) => {
        try {
            const { name, price } = req.body;

            const product = await Product.create({ name, price });

            res.send(product);
            // return res.redirect('/products');

        } catch (err) {
            next(err);
        }
    }
};