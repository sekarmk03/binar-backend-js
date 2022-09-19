const data = require('../data.json')
const fs = require('fs')

const getData = (req, res) => {
  let users = data.users
  res.status(200).json({
    status: 'success',
    message: 'success get all data users',
    data: users
  })
}

const getDetail = (req, res) => {
  const { userId } = req.params
  const user = data.users.find(user => user.id === +userId)

  if (user.length == 0) {
    res.status(404).json({
      status: 'failed',
      message: 'not found!',
      data: null
    })
  }

  res.status(200).json({
    status: 'success',
    message: 'success get detail user',
    data: user
  })
}

const addUser = (req, res) => {
  const { name, email } = req.body
  let users = data.users

  const user = {
    id: users[users.length - 1].id + 1,
    name,
    email
  }

  users.push(user)

  fs.writeFileSync('./data.json', JSON.stringify(data))

  res.status(201).json({
    status: 'success',
    message: 'success add new user',
    data: users
  })
}

const updateUser = (req, res) => {
  const { name, email } = req.body
  const { userId } = req.params
  let users = data.users

  const index = users.findIndex(user => user.id == userId)

  if (name) {
    users[index].name = name
  }

  if (email) {
    users[index].email = email
  }

  fs.writeFileSync('./data.json', JSON.stringify(data))

  res.status(201).json({
    status: 'success',
    message: 'success update data user',
    data: users
  })
}

const deleteUser = (req, res) => {
  const { userId } = req.params
  let users = data.users

  const index = users.findIndex(user => user.id === +userId)
  users.splice(index, 1)

  fs.writeFileSync('./data.json', JSON.stringify(data))

  res.status(201).json({
    status: 'success',
    message: 'success delete data user',
    data: users
  })
}

module.exports = { getData, getDetail, addUser, updateUser, deleteUser }
