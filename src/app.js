const express = require("express");
const tecnico = require("./routes/tecnicos.routes")
const cadastroUser = require("./routes/usuarios.routes")
const historicos = require("./routes/historico.routes")
const db = require("./data/mongo")
const cors = require('cors');

// Swagger
const swaggerUi = require('swagger-ui-express')
const swaggerDocument = require('./docs/doc.json')


const app = express();
app.use(express.json());
//Cors usamos para conseguir acesso a outro dominios no caso esta aberto para tudo
app.use(cors({origin: '*'}))
//usando os url aqui
app.use("/tecnicos",tecnico)
app.use("/User", cadastroUser)
app.use("/historico", historicos)
//Definindo rota para a documentação
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));




module.exports = app