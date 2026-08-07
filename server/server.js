import express from 'express';
import db from './models/index.js';
import * as vagaController from './controllers/vagaController.js';
import cors from 'cors';
const app = express();
const PORT = 4545;

app.use(express.json());
app.use(cors());

app.get('/vagas', vagaController.listAll);

db.sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server rodando na porta ${PORT}`)
        });
    })
    .catch(err => console.log('ERROR: ' + err));