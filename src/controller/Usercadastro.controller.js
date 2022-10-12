const mongoose = require("mongoose")
const cadastroUser = require("../models/usuario")

const resultadoCadastroUser = async (req, res) => {
    try {
        const cadastrouser = await cadastroUser.find()
        return res.status(200).json(cadastrouser)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
};

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
    const cadastroUserJaExistir = await cadastroUser.findOne({ nome: req.body.nome })
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
    }
    try {
        const cadastroUserAtualizado = await encontrarCadastroUser.save()
        res.status(200).json(cadastroUserAtualizado)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

const deleteCadastroUser = async (req, res) => {
    try {
        const cadastroUser = await cadastroUser.findById(req.params.id)
        if (cadastroUser == null) {
            return res.status(400).json({ message: "Cadastro de usuario não encontrado" })
        }
        await cadastroUser.remove()
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
