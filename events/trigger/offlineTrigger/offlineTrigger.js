const { offlineTriggerCreativeEvent } = require('./creative/offlineTriggerCreativeEvent')
const { offlineTriggerNotCreativeEvent } = require('./notCreative/offlineTriggerNotCreativeEvent')

async function offlineTrigger(event) {
  console.log('offlineTrigger', event)
  if (event.createAlias === 'yes') {
    return offlineTriggerCreativeEvent(event)
  }
  if (event.createAlias === 'no') {
    return offlineTriggerNotCreativeEvent(event)
  }
  return null
}

module.exports = { offlineTrigger }
