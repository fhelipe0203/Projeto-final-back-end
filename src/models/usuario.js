const mongoose = require("mongoose")

const cadastroUserShema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

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
    },
    interesse:{
        type: String,
        require: true
    },
})

module.exports = mongoose.model("cadastroUser", cadastroUserShema)