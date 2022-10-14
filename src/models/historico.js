const mongoose = require("mongoose")


const historicoShema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    tecnico:{
        type: mongoose.ObjectId,
        ref:"cadastro",
        autopopulate: true
    },
    usuario:{
        type: mongoose.ObjectId,
        ref:"cadastroUser",
        autopopulate: true

    },
    datadecreation: {
        type: Date,
        require: true,
        default: new Date
    },
    

})

module.exports = mongoose.model("historico", historicoShema)