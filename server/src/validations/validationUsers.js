const Joi = require('joi');

const bodyValidator = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).trim().required(),
  lastName: Joi.string().alphanum().min(3).max(30).trim().required(),
  userName: Joi.string().min(6).max(16).required(),
  password: Joi.string().required(),
  phone: Joi.string().min(9).max(13).required(),
  country: Joi.string().required(),
  date: Joi.string().required(),
  email: Joi.string().email().required(),
  address: Joi.string().required(),
  image: Joi.string().required(),
});

const queryValidator = Joi.object({
  name: Joi.string().min(3).max(30).trim(),
  lastName: Joi.string().min(3).max(30).trim(),
  userName: Joi.string().min(3).max(100).trim(),
  country: Joi.string(),
  address: Joi.string(),
})

const paramsValidator = Joi.object({
  id: Joi.string().alphanum().length(24).required()
})

const bodyAuthValidator = Joi.object({
  userName: Joi.string().min(3).max(100).required(),
  password: Joi.string().required()
})

module.exports = { bodyValidator, queryValidator, paramsValidator, bodyAuthValidator }