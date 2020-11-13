import express from 'express';
import * as transactionService from '../services/transactionService.js';
const transactionRouter = express.Router();

transactionRouter.get('/', transactionService.index);
transactionRouter.post('/', transactionService.create);
transactionRouter.put('/', transactionService.update);
transactionRouter.delete('/', transactionService.remove);

export default transactionRouter;
