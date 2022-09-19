const { offlineTriggerCreativeEvent } = require('./creative/offlineTriggerCreativeEvent')
const { offlineTriggerNotCreativeEvent } = require('./notCreative/offlineTriggerNotCreativeEvent')

async function offlineTrigger(event) {
  if (event.createsAlias === 'yes') {
    return offlineTriggerCreativeEvent(event)
  }
  if (event.createsAlias === 'no') {
    return offlineTriggerNotCreativeEvent(event)
  }
  return null
}

module.exports = { offlineTrigger }
