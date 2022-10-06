const express = require("express");
const cadastro = require("./routes/users.routes")
const db = require("./data/mongo")
const cors = require('cors');



const app = express();
app.use(express.json());
app.use(cors({origin: '*'}))
app.use("/cadastro", cadastro)

module.exports = app