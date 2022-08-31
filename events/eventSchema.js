const Joi = require('joi')

const eventSchema = Joi.object({
  createAlias: Joi.string().required().valid('yes', 'no'),
  eventTypeId: Joi.number().positive().required(),
  appIdentifier: Joi.object({
    value: Joi.string().required(),
    name: Joi.string().required(),
  })
    .when('createAlias', { is: 'no', then: Joi.required() })
    .when('createAlias', {
      is: 'yes',
      then: Joi.forbidden(),
    }),
}).unknown(true)

module.exports = { eventSchema }
