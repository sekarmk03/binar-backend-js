require("dotenv").config();
const express = require("express");
const app = express();
const route = require('./routes');
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT, PORT } = process.env;

app.get("/", (req, res) => {
  return res.json({
    statut: "ok",
    data: {
      name: "John asdf",
      age: 25,
    },
  });
});

app.use('/api/v1', route);

app.listen(PORT, () => {
  console.log("Server is running on port 8000");
});
