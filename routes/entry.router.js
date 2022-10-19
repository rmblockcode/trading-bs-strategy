const express = require('express');
const boom = require('@hapi/boom');

const EntryService = require('./../services/entry.service');
const validatorHandler = require('../middlewares/validator.handler');
const entryCalculationSchema = require('./../schemas/entry.schema');

const router = express.Router();
const service = new EntryService();

router.get('/',
  validatorHandler(entryCalculationSchema, 'query'),
  async (req, res, next) => {
  try {
    const { pivotPrice, operationType, decimals } = req.query;
    let result = {};
    if (operationType === 'BUY LIMIT'){
      result = await service.entryBuyLimitCalculation(pivotPrice, parseInt(decimals));
    } else if (operationType === 'SELL LIMIT') {
      result = await service.entrySellLimitCalculation(pivotPrice, parseInt(decimals));
    } else {
      throw boom.badRequest('Operation type should be either BUY LIMIT or SELL LIMIT!');
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
