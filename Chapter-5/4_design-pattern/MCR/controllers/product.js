const { Product } = require('../models');

module.exports = {
    store: async (req, res, next) => {
        try {
            const { name, price } = req.body;
            const product = await Product.create({ name, price });

            return res.status(201).json({
                status: true,
                message: 'success',
                data: product
            });

        } catch (err) {
            next(err);
        }
    },
    index: async (req, res, next) => {
        try {
            const products = await Product.findAll();

            return res.status(200).json({
                status: true,
                message: 'success',
                data: products
            });
        } catch (err) {
            next(err);
        }
    },
    show: async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await Product.findOne({ where: { id } });

            if (!product) {
                return res.status(404).json({
                    status: true,
                    message: 'record not found!',
                    data: null
                });
            }

            return res.status(200).json({
                status: true,
                message: 'success',
                data: product
            });
        } catch (err) {
            next(err);
        }
    },
    destroy: async (req, res, next) => {
        try {
            const { id } = req.params;
            const product = await Product.findOne({ where: { id } });
            if (!product) {
                return res.status(404).json({
                    status: true,
                    message: 'record not found!',
                    data: null
                });
            }

            await Product.destroy({ where: { id } });
            return res.status(200).json({
                status: true,
                message: 'success',
                data: product
            });
        } catch (err) {
            next(err);
        }
    },
    update: async (req, res, next) => {
        try {
            const { id } = req.params;
            const { name, price } = req.body;
            const product = await Product.findOne({ where: { id } });
            if (!product) {
                return res.status(404).json({
                    status: true,
                    message: 'record not found!',
                    data: null
                });
            }

            await Product.update({ name, price }, { where: { id } });

            return res.status(200).json({
                status: true,
                message: 'success',
                data: product
            });

        } catch (err) {
            next(err);
        }
    }
};