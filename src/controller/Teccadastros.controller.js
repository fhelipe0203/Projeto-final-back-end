const mongoose = require("mongoose")
const Cadastro = require("../models/tecnicos")


const resultadoCadastros= async(req,res)=>{
    try{
        const cadastros = await Cadastro.find()
        return res.status(200).json(cadastros)
    }catch (err){
        res.status(500).json({message: err.message})
    }
};

const IdCadastros= async(req,res)=>{
    try{
        const cadastros = await Cadastro.findById(req.params.id)
        return res.status(200).json(cadastros)
    }catch (err){
        res.status(500).json({message: err.message})
    }
};


const criarCadastros = async (req,res)=>{
    console.log(req.body)

    const cadastro = new Cadastro({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome,
        email: req.body.email,
        contato: req.body.contato,
        especialidade: req.body.especialidade,
        estado: req.body.estado,
        datadecreation: req.body.datadecreation,
    })
    const cadastroJaExistir = await Cadastro.findOne({nome: req.body.nome})
    if(cadastroJaExistir){
        return res.status(409).json({error:"Tecnico já cadastrado"})
    }
    try{
        const novoCadastro = await cadastro.save()
        res.status(201).json(novoCadastro)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}

const putCadastro = async (req,res) => {
    const encontrarCadastro = await Cadastro.findById(req.params.id)
    if(encontrarCadastro == null){
        return res.status(400).json({message: "Cadastro não encontrado"})
    }
    try{
        const cadastroatualizado = await encontrarCadastro.save()
        res.status(200).json(cadastroatualizado)
    }
    catch(err){
        res.status(500).json({message: err.message})
    }
    
}



       
module.exports= {
    resultadoCadastros,
    criarCadastros,
    putCadastro,
    IdCadastros,
   
}