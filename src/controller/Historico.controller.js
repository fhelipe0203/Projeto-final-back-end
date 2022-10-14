const mongoose = require("mongoose")
const Historico = require("../models/historico")

const resultadoHistorico= async (req, res) => {
    try {
        const gethistorico = await Historico.find().populate("tecnico")
        return res.status(200).json(gethistorico)
    }catch (err){
        res.status(500).json({ message: err.message })
    }
};

const idHistorico= async(req, res)=>{
    try {
        const gethistorico = await Historico.findById(req.params.id)
        return res.status(200).json(gethistorico)
    }catch (err) {
        res.status(500).json({ message: err.message })
    }
};

const criarHistorico = async (req, res) => {
    
    console.log(req.body)
    const historico = new Historico({
        _id: new mongoose.Types.ObjectId(),
        tecnico: req.body.tecnico,
        usuario: req.body.usuario,
        datadecreation: req.body.datadecreation,
    })
    const historicoJaExistir = await Historico.findOne({ tecnico: req.body.tecnico })
    if (historicoJaExistir) {
        return res.status(409).json({ error: "historico já criado" })
    }
    try {
        const novoHistorico = await historico.save()
        res.status(201).json(novoHistorico)
    }
    catch (err) {
        res.status(500).json({ message: err.message })
    }
}

module.exports={
    resultadoHistorico,
    idHistorico,
    criarHistorico,
}