const express = require("express")
const router = express.Router()
const controller = require("../controller/Tecnicos.controller")






//Criamos as req em controller e aqui chamamos
router.get("/",controller.resultadoTecnico)
router.get("/:id",controller.IdTecnico)
router.post("/",controller.criarCadastroTecnico)
router.patch("/:id",controller.patchTecnico)
router.delete("/:id",controller.deleteTecnico)

module.exports = router