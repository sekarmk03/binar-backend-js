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
    },
    show: async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await Product.findOne({ where: { id } });

            return res.render('product/detail', { product });
        } catch (err) {
            next(err);
        }
    },
    destroy: async (req, res, next) => {
        try {
            const { id } = req.params;
            await Product.destroy({ where: { id } });

            return res.redirect('/products');
        } catch (err) {
            next(err);
        }
    },
    edit: async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await Product.findOne({ where: { id } });


            return res.render('product/update', { product });
        } catch (err) {
            next(err);
        }
    },
    update: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { name, price } = req.body;
            await Product.update({ name, price }, { where: { id } });

            return res.redirect(`/products/${id}`);

        } catch (err) {
            next(err);
        }
    }
};