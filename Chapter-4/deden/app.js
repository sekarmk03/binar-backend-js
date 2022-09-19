const express = require('express')
const app = express()
const port = 3000
const router = require('./routes')

app.use(express.json())

app.get('/', (req, res) => {
  res.send('server aman')
})

app.use(router)

app.listen(port, () => {
  console.log('listen on port ', port)
})
