import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
import createVagaModel from '../models/vagaModel.js';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres'
  }
);

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Vaga = createVagaModel(sequelize, Sequelize);

export default db;