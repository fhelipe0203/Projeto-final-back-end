const express = require("express")
const router =express.Router()
const controller = require("../controller/users.controller")
const mongoose = require ("mongoose")

//mongodb connection
mongoose
.connect("mongodb+srv://dbUsers:db1234@toti.0v6givl.mongodb.net/?retryWrites=true&w=majority")
.then(()=> console.log("conectado a MongoAtlas"))
.catch((error)=>console.error(error))



//Criamos as req em controller e aqui chamamos
router.get("/",controller.getAll)
router.get("/uudi",)
router.post("/cadastrar",controller.createTask)
router.put("/atualizar")

module.exports= router