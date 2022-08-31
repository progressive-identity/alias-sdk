const { liveTrigger } = require('./events/trigger/liveTrigger/liveTrigger')
const { offlineTrigger } = require('./events/trigger/offlineTrigger/offlineTrigger')
const { validateSchema } = require('./joi/validateSchema')
const { eventSchema } = require('./events/eventSchema')

async function triggerEvent(event) {
  validateSchema({ value: event, schema: eventSchema })
  const config = { mode: 'offline' }
  if (config.mode === 'live') {
    return liveTrigger(event)
  }

  if (config.mode === 'offline') {
    return offlineTrigger(event)
  }

  return null
}

// triggerEvent({
//   createAlias: 'no',
//   eventTypeId: 1,
//   appIdentifier: {
//     name: 'name',
//     value: 'value ',
//   },
// }).then((result) => console.log({ result }))

module.exports = { triggerEvent }
