const Joi = require('joi');

const bodyValidator = Joi.object({
  created_by: Joi.object().required(),
  title: Joi.string().min(3).max(30).trim().required(),
  description: Joi.string().min(20).max(600).required(),
  created_date: Joi.string().length(10).required(),
  price: Joi.number().min(1).max(999999999999999),
  labels: Joi.array(),
  rating: Joi.array()
});

const queryValidator = Joi.object({
  created_by: Joi.string().min(3).max(30).trim(),
  title: Joi.string().min(3).max(30).trim(),
  description: Joi.string().min(20).max(600).trim(),
  price: Joi.number().min(1).max(999999999999999),
  rating: Joi.number().min(1).max(5)
})

const paramsValidator = Joi.object({
  id: Joi.string().alphanum().length(24).required()
})

module.exports = { bodyValidator, queryValidator, paramsValidator}