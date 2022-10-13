const express = require("express")
const router = express.Router()
const controller = require("../controller/User.controller")





//Criando as requisições em controller

router.get("/",controller.resultadoCadastroUser)
router.get("/:id",controller.idCadastroUser)
router.post("/",controller.criarCadastroUser)
router.patch("/:id",controller.putCadastroUser)
router.delete("/:id",controller.deleteCadastroUser)

//exportando requicições
module.exports = router