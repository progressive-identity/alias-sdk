const { liveTriggerCreativeEvent } = require('./creative/liveTriggerCreativeEvent')
const { liveTriggerNotCreativeEvent } = require('./notCreative/liveTriggerNotCreativeEvent')

async function liveTrigger(event) {
  console.log('liveTrigger', event)
  if (event.createAlias === 'yes') {
    return liveTriggerCreativeEvent(event)
  }
  if (event.createAlias === 'no') {
    return liveTriggerNotCreativeEvent(event)
  }
  return null
}

module.exports = { liveTrigger }
