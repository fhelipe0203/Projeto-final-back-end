const express = require("express");
const app = express();

app.use(express.json());

const users = require("./routes/users.routes")



module.exports = app