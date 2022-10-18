const mongoose = require("mongoose")
const cadastroUser = require("../models/usuario")
//trocar de nome
const resultadoCadastroUser = async (req, res) => {
    try {
        const cadastrouser = await cadastroUser.find()
        return res.status(200).json(cadastrouser)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};
//trocar
const idCadastroUser = async (req, res) => {
    try {
        const cadastrouser = await cadastroUser.findById(req.params.id)
        return res.status(200).json(cadastrouser)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

const criarCadastroUser = async (req, res) => {
    console.log(req.body) 

    const CadastroUser = new cadastroUser({
        _id: new mongoose.Types.ObjectId(),
        nome: req.body.nome, 
        email: req.body.email,
        contato: req.body.contato,
    })
    const cadastroUserJaExistir = await cadastroUser.findOne({ nome: req.body.nome })//trocar por email
    if (cadastroUserJaExistir) {
        return res.status(409).json({error:"Usuario já cadastrado"})
    }
    try {
        const novoCadastroUser = await CadastroUser.save()
        res.status(201).json(novoCadastroUser)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const putCadastroUser = async (req, res) => {
    const encontrarCadastroUser = await cadastroUser.findById(req.params.id)
    if (encontrarCadastroUser == null) {
        return res.status(400).json({ message: "cadastro de usuario não encontrado "})
    };
    if (req.body.nome != null) {
        encontrarCadastroUser.nome = req.body.nome
       };
       if (req.body.email != null) {
        encontrarCadastroUser.email = req.body.email  
      };
     if (req.body.contato != null) {
         encontrarCadastroUser.contato = req.body.contato 
      };



    try {
        const cadastroUserAtualizado = await encontrarCadastroUser.save()//verificar o metodo fazer combinação de update e set
        res.status(200).json(cadastroUserAtualizado)
    }
    
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const deleteCadastroUser = async (req, res) => {
    try {
        const CadastroUser = await cadastroUser.findById(req.params.id)
        if (CadastroUser == null) {
            return res.status(400).json({ message: "Cadastro de usuario não encontrado" })
        }
        await CadastroUser.remove()
        res.json({ message: "Cadastro de Usuario deletado" })
    }
    catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

module.exports= {
    resultadoCadastroUser,
    idCadastroUser,
    criarCadastroUser,
    putCadastroUser,
    deleteCadastroUser
}
