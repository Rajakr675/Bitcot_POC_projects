import Joi from 'joi';

export const config = Joi.object({
  key: Joi.string().valid('test', 'list').required(),
});



// const Joi = require("joi");

// module.exports.config = Joi.object({
//   key: Joi.string().valid('test', 'list').required()
// })