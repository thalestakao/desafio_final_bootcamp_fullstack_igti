import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
import TransactionModel from '../models/TransactionModel.js';

export const index = (req, res, next) => {};
export const create = (req, res, next) => {};
export const update = (req, res, next) => {};
export const remove = (req, res, next) => {};
