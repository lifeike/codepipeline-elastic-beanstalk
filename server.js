const express = require("express")
const app = express()

const port = process.env.HTTP_PORT || 8080

app.get("/", function (req, res) {
  res.send("hello, this is backend ")
})

app.get("/flowers", function (req, res) {
  res.send({
    name: "feeco is not feeco",
    age: 29,
  })
})

app.listen(port)
