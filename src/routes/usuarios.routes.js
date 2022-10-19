const express = require("express")
const router = express.Router()
const controller = require("../controller/User.controller")





//Criando as requisições em controller

router.get("/",controller.resultadoUser)
router.get("/:id",controller.idUser)
router.post("/",controller.criarCadastroUser)
router.patch("/:id",controller.putUser)
router.delete("/:id",controller.deleteUser)

//exportando requicições
module.exports = router