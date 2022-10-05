const { Product } = require('../models');

module.exports = {
    create: (req, res, next) => {
        res.render('product/create');
    },
    store: async (req, res, next) => {
        try {
            const { name, price } = req.body;

            await Product.create({ name, price });

            return res.redirect('/products');

        } catch (err) {
            next(err);
        }
    },
    index: async (req, res, next) => {
        try {
            const products = await Product.findAll();

            return res.render('product/index', { products });
        } catch (err) {
            next(err);
        }
    }
};