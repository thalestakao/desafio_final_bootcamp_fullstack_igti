import mongoose from 'mongoose';
const ObjectId = mongoose.Types.ObjectId;

// Aqui havia um erro difícil de pegar. Importei como "transactionModel",
// com "t" minúsculo. No Windows, isso não faz diferença. Mas como no Heroku
// o servidor é Linux, isso faz diferença. Gastei umas boas horas tentando
// descobrir esse erro :-/
import TransactionModel from '../models/TransactionModel.js';

export const index = async (req, res, next) => {
  const { period } = req.query;
  try {
    if (!period) {
      throw new Error('Necessário informar o parâmetro period');
    }

    const items = await TransactionModel.find({ yearMonth: period });

    res.status(200).send(items);
  } catch (err) {
    next(err);
  }
};
export const create = (req, res, next) => {};
export const update = (req, res, next) => {};
export const remove = (req, res, next) => {};
