const Joi = require('joi');

//rating no puede tener .trim por ser un numer

const bodyValidator = Joi.object({
  name: Joi.string().alphanum().min(3).max(60).trim().required(),
  lastName: Joi.string().alphanum().min(3).max(60).trim().required(),
  userName: Joi.string().min(6).max(50).required().trim(),
  password: Joi.string().required().trim().min(8).max(60),
  phone: Joi.string().min(11).max(18).required().trim(),
  country: Joi.string().required().min(3).max(58).trim(),
  date: Joi.string().required().length(10).trim(),
  email: Joi.string().email().required().min(5).max(50).trim(),
  address: Joi.string().required().min(5).max(50).trim(),
  image: Joi.string().required(),
  rating: Joi.number().required().min(0).max(5),
  role: Joi.string().required().min(3).max(30).trim()
});

const queryValidator = Joi.object({
  name: Joi.string().min(3).max(60).trim(),
  lastName: Joi.string().min(3).max(60).trim(),
  userName: Joi.string().min(6).max(50).trim(),
  country: Joi.string().min(3).max(58).trim(),
  address: Joi.string().min(5).max(50).trim()
})

const paramsValidator = Joi.object({
  id: Joi.string().alphanum().length(24).required()
})

module.exports = { bodyValidator, queryValidator, paramsValidator}