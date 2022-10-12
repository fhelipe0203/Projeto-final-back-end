const express = require("express")
const router = express.Router()
const controller = require("../controller/Teccadastros.controller")






//Criamos as req em controller e aqui chamamos
router.get("/",controller.resultadoCadastro)
router.get("/:id",controller.IdCadastro)
router.post("/",controller.criarCadastro)
router.patch("/:id",controller.putCadastro)
router.delete("/:id",controller.deleteCadastro)

module.exports = router