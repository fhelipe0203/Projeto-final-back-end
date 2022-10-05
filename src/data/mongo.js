const mongoose = require ("mongoose")
mongoose
.connect("mongodb+srv://dbUsers:db1234@toti.0v6givl.mongodb.net/?retryWrites=true&w=majority")
.then(()=> console.log("conectado a MongoAtlas"))
.catch((error)=>console.error(error))

