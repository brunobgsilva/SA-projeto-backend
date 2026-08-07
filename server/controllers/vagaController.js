import db from '../models/index.js';

const { Vaga } = db;

export async function listAll(req, res) {
    const vagas = await Vaga.findAll();

    try {
        res.status(200).json(vagas);
    } catch (err) {
        res.status(500).json(err);
    };
};

