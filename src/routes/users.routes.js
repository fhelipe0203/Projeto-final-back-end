const express = require("express")
const router = express.Router()
const controller = require("../controller/cadastros.controller")






//Criamos as req em controller e aqui chamamos
router.get("/",controller.resultadoCadastros)
router.get("/uudi")
router.post("/",controller.criarCadastros)
router.patch("/:uid",controller.putCadastro)

module.exports= router