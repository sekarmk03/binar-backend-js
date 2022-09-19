const data = require('../data.json')
const fs = require('fs')

const getProducts = (req, res) => {
  let products = data.products

  res.status(200).json({
    status: 'success',
    message: 'success get all data products',
    data: products
  })
}

const getDetail = (req, res) => {
  const { productId } = req.params
  let products = data.products

  const product = products.find(product => product.id === +productId)

  if (product.length == 0) {
    res.status(404).json({
      status: 'failed',
      message: 'failed get detail product',
      data: null
    })
  }

  res.status(200).json({
    status: 'success',
    message: 'success get detail product',
    data: product
  })
}

const addProduct = (req, res) => {
  const { name, description, price } = req.body
  let products = data.products

  const product = {
    id: products[products.length - 1].id + 1,
    name,
    description,
    price
  }

  products.push(product)

  fs.writeFileSync('./data.json', JSON.stringify(data))

  res.status(201).json({
    status: 'success',
    message: 'success add new data product',
    data: products
  })
}

const updateProduct = (req, res) => {
  const { productId } = req.params
  const { name, description, price } = req.body
  let products = data.products

  const index = products.findIndex(product => product.id === +productId)

  if (name) {
    products[index].name = name
  }

  if (description) {
    products[index].description = description
  }

  if (price) {
    products[index].price = price
  }

  fs.writeFileSync('./data.json', JSON.stringify(data))

  res.status(201).json({
    status: 'success',
    message: 'success update data product',
    data: products
  })
}

const deleteProduct = (req, res) => {
  const { productId } = req.params
  let products = data.products

  const index = products.findIndex(product => product.id === +productId)

  products.splice(index, 1)

  fs.writeFileSync('./data.json', JSON.stringify(data))

  res.status(201).json({
    status: 'success',
    message: 'success delete data product',
    data: products
  })
}

module.exports = { getProducts, getDetail, addProduct, updateProduct, deleteProduct }
