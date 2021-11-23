const express = require("express")
const app = express()

app.get("/", function (req, res) {
  res.send("hello, this is backend ")
})

app.listen(8080)
