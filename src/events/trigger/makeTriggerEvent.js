const { liveTrigger } = require('./liveTrigger/liveTrigger')
const { offlineTrigger } = require('./offlineTrigger/offlineTrigger')
const { validateSchema } = require('../../joi/validateSchema')
const { eventSchema } = require('../eventSchema')

function makeTriggerEvent(config) {
  return (event) => {
    validateSchema({ value: event, schema: eventSchema })
    if (config.mode === 'live') {
      return liveTrigger(event)
    }

    if (config.mode === 'offline') {
      return offlineTrigger(event)
    }

    return null
  }
}

module.exports = { makeTriggerEvent }
