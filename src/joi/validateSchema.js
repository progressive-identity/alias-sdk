const { InvalidSchemaError } = require('../errors/InvalidSchemaError')

function validateSchema({ value, schema }) {
  const { error } = schema.validate(value)
  if (error) throw new InvalidSchemaError(error.message)
  return true
}

module.exports = { validateSchema }
