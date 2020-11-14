import express from 'express';
import * as transactionService from '../services/transactionService.js';
import { logger } from '../config/logger.js';

const transactionRouter = express.Router();

transactionRouter.get('/', transactionService.index);
transactionRouter.post('/', transactionService.create);
transactionRouter.put('/', transactionService.update);
transactionRouter.delete('/', transactionService.remove);

transactionRouter.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});
export default transactionRouter;
