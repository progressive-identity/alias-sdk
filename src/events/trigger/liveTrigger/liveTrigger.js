const { liveTriggerCreativeEvent } = require('./creative/liveTriggerCreativeEvent')
const { liveTriggerNotCreativeEvent } = require('./notCreative/liveTriggerNotCreativeEvent')

async function liveTrigger(event) {
  if (event.createsAlias === 'yes') {
    return liveTriggerCreativeEvent(event)
  }
  if (event.createsAlias === 'no') {
    return liveTriggerNotCreativeEvent(event)
  }
  return null
}

module.exports = { liveTrigger }
