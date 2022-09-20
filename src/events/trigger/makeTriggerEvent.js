const { liveTrigger } = require('./liveTrigger/liveTrigger')
const { offlineTrigger } = require('./offlineTrigger/offlineTrigger')
const { validateSchema } = require('../../joi/validateSchema')
const { eventSchema } = require('../eventSchema')

const makeTriggerEvent = (mode) => (event) => {
  validateSchema({ value: event, schema: eventSchema })
  if (mode === 'live') {
    return liveTrigger(event)
  }

  if (mode === 'offline') {
    return offlineTrigger(event)
  }

  return null
}

module.exports = { makeTriggerEvent }
