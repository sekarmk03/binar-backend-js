const data = require('../data.json');
const fs = require('fs');

module.exports = {
    index: (req, res) => {
        const { query } = req.query;
      
        let product = data.products;
       

        if (query) {
            product = data.products.filter((el) => el.name == query);
        }

        return res.status(200).json({
            status: 'success',
            message: 'success get all data!',
            data: product,
            
        });
    },
    show: (req, res) => {
        const { productId } = req.params;

        const product = data.products.filter((el) => el.id == productId);

        if (product.length == 0) {
            return res.status(404).json({
                status: 'failed',
                message: 'not found!',
                data: null
            });
        }

        return res.status(200).json({
            status: 'success',
            message: 'success get detail data!',
            data: product[0]
        });
    },
    create: (req, res) => {
        const { name, description, price } = req.body;
        let product = data.products;

        const produk = {
            id: product[product.length - 1].id + 1,
            name,
            description,
            price
        };
        product.push(produk);

        fs.writeFileSync('./data.json', JSON.stringify(data));

        return res.status(201).json({
            status: 'success',
            message: 'success create data!',
            data: produk
        });
    },
    update: (req, res) => {
        const {  name, description, price } = req.body;
        const { productId } = req.params;

        const foundIndex = data.products.findIndex((el) => el.id == productId);
        if (foundIndex < 0) {
            return res.status(404).json({
                status: 'failed',
                message: 'not found!',
                data: null
            });
        }
        else if (name) {
            data.products[foundIndex].name = name;
        }

        if (description) {
            data.products[foundIndex].description = description;
        }

        if (price) {
            data.products[foundIndex].price = price;
        }

        fs.writeFileSync('./data.json', JSON.stringify(data));

        return res.status(201).json({
            status: 'success',
            message: 'success update data!',
            data: data.products[foundIndex]
        });
    },
    delete: (req, res) => {
        const { productId } = req.params;
        let product = data.products;
        let panjangArr = product.length;
        const foundIndex = data.products.findIndex((el) => el.id == productId);
        if (foundIndex < 0 && foundIndex > panjangArr-1) {
            return res.status(404).json({
                status: 'failed',
                message: 'not found!',
                data: null
            });
        }
        else{
            data.products.splice(foundIndex,1);
        }
        fs.writeFileSync('./data.json', JSON.stringify(data));

        return res.status(200).json({
            status: 'success',
            message: 'success delete data!',
            data: data.products
            
        });
    }
};