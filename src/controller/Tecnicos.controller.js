const mongoose = require("mongoose")
const Cadastro = require("../models/tecnicos")


const resultadoCadastro= async (req, res) => {
    try {
        const cadastro = await Cadastro.find()
        return res.status(200).json(cadastro)
    }catch (err){
        res.status(500).json({ message: err.message })
    }
};

const IdCadastro= async(req, res)=>{
    try {
        const cadastro = await Cadastro.findById(req.params.id)
        return res.status(200).json(cadastro)
    }catch (err) {
        res.status(500).json({ message: err.message })
    }
};


const criarCadastro = async (req, res) => {
    //tirar o console.log
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
    const cadastroJaExistir = await Cadastro.findOne({ email: req.body.email })
    if (cadastroJaExistir) {
        return res.status(409).json({ error: "Tecnico já cadastrado" })
    }
    try {
        const novoCadastro = await cadastro.save()
        res.status(201).json(novoCadastro)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const patchCadastro = async (req, res) => {
    const encontrarCadastro = await Cadastro.findById(req.params.id)
     //tirar o console.log   
         console.log(req.body)
     if(encontrarCadastro == null){
        return res.status(400).json({message: "Cadastro não encontrado"})
    };
    if (req.body.nome != null) {
     encontrarCadastro.nome = req.body.nome
    };
    if (req.body.email != null) {
     encontrarCadastro.email = req.body.email  
   };
  if (req.body.contato != null) {
      encontrarCadastro.contato = req.body.contato 
   };
  try{
    const cadastroatualizado = await encontrarCadastro.save()//verficar o metodo save
    res.status(200).json(cadastroatualizado)
   }
    
  catch(err){
    res.status(500).json({message: err.message})
   }
    
}

/*const patchCadastro = async (req, res) => {
    const encontrarCadastro = await Cadastro.findById(req.params.id)
    const updateObject = req.body; 
    Cadastro.updateOne({_id  : req.params.id}, {$set: updateObject});
};*/



const deleteCadastro = async (req, res) => {
    try {
        const cadastros = await Cadastro.findById(req.params.id)
        if (cadastros == null) {
            return res.status(404).json({ message:"cadastro não encontrado" })
        }
        await cadastros.remove()
        res.json({message: "cadastro deletado"})
    }catch (err) {
        return res.status(500).json({ message: err.message })
}
}

       
module.exports= {
    resultadoCadastro,
    criarCadastro,
    patchCadastro,
    IdCadastro,
    deleteCadastro
}