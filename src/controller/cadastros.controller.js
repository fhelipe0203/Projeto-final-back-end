const mongoose = require("mongoose")
const cadastros = require("../models/cadastros")
const Cadastro = require("../models/cadastros")

const resultadoCadastros= async(req,res)=>{
    try{
        const cadastro = await Cadastro.find()
        return res.status(200).json(cadastro)
    }catch (err){
        res.status(500).json({message: err.message})
    }
};



const criarCadastros = async (req,res)=>{
    const cadastro = new Cadastro({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        email: req.body.email,
        contato: req.body.contato,
        especialidade: req.body.especialidade,
        estado: req.body.estado,
        datadecreation: req.body.datadecreation,
    })//falta colocar error y cadastro ya existente
}
       
module.exports= {
    resultadoCadastros,
    criarCadastros
}