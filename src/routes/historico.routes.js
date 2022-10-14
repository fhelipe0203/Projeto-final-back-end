const express = require("express")
const router = express.Router()
const controller = require("../controller/Historico.controller")






//Criamos as req em controller e aqui chamamos
router.get("/",controller.resultadoHistorico)
router.get("/:id",controller.idHistorico)
router.post("/",controller.criarHistorico)
//router.patch("/:id",controller.)
//router.delete("/:id",controller.)

module.exports = router