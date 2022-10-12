const mongoose = require("mongoose")

const cadastroUserShema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    contato: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("cadastroUser", cadastroUserShema)