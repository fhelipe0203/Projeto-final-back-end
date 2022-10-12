const express = require("express");
const cadastro = require("./routes/tecnicos.routes")
const db = require("./data/mongo")
const cors = require('cors');



const app = express();
app.use(express.json());
//Cors usamos para conseguir acesso a outro dominios no caso esta aberto para tudo
app.use(cors({origin: '*'}))
//usando os url aqui
app.use("/cadastro", cadastro)





module.exports = app