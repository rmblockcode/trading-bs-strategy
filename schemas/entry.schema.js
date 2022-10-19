const Joi = require('joi');

const pivotPrice = Joi.number();
const operationType = Joi.string();
const decimals = Joi.number().integer();

const entryCalculationSchema = Joi.object({
  pivotPrice: pivotPrice.required(),
  operationType: operationType.required(),
  decimals: decimals.required()
})

module.exports = entryCalculationSchema;
