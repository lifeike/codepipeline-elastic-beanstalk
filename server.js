const express = require("express")
const app = express()

const message = "hello, this is feeco"
app.get("/", function (req, res) {
  res.send(message)
})

app.listen(8080)
