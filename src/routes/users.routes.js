const express = require("express")
const router = express.Router()
const controller = require("../controller/cadastros.controller")


//mongodb connection



//Criamos as req em controller e aqui chamamos
router.get("/",controller.resultadoCadastros)
router.get("/uudi")
router.post("/",controller.criarCadastros)
router.put("/atualizar")

module.exports= router