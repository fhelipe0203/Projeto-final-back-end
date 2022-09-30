const mongoose = require("mongoose");

const UserShema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },

})