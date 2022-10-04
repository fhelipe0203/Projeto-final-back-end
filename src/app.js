const express = require("express");
const { db } = require("./models/cadastros");
const cadastro = require("./routes/users.routes")



const app = express();
app.use(express.json());

app.use("/cadastro", cadastro)

module.exports = app