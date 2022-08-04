const Joi = require('joi');

const bodyValidator = Joi.object({
        //created_by deberia ser un objeto
  created_by: Joi.string().min(3).max(30).required(),
  publication_id: Joi.string().required().length(24),
  text: Joi.string().min(3).max(600).required(),
  rating: Joi.number().required().min(1).max(5),
});

const queryValidator = Joi.object({
  created_by: Joi.string().min(3).max(30),
  rating: Joi.number().min(1).max(5)
})

const paramsValidator = Joi.object({
  id: Joi.string().alphanum().length(24).required()
})

module.exports = { bodyValidator, queryValidator, paramsValidator}