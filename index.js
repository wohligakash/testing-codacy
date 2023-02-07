const express = require("express")
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world")
})

app.listen(8050, () => {
  console.log("Server has started on localhost:8050")
})