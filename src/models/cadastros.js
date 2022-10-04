const mongoose = require("mongoose")

const cadastroShema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,

    nome: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require:true,
    },
    contato:{
        type: String,
        require: true,
    },
    especialidade: {
        type: String,
        require: true,
    },
    estado:{
       type: String,
       require: true,
    },
    datadecreation: {
        type: Date,
        require: false,
        default: new Date
    }
    
})

module.exports= mongoose.model("cadastro",cadastroShema)