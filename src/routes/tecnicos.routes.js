const express = require("express")
const router = express.Router()
const controller = require("../controller/Teccadastros.controller")






//Criamos as req em controller e aqui chamamos
router.get("/",controller.resultadoCadastros)
router.get("/:id",controller.IdCadastros)
router.post("/",controller.criarCadastros)
router.patch("/:uid",controller.putCadastro)

module.exports= router