const express = require("express")
const app = express();

app.get("/", (req, res) => {
  res.send("Hello DevOps Team")
})

app.listen(8050, () => {
  console.log("Server is running on localhost:8050")
})