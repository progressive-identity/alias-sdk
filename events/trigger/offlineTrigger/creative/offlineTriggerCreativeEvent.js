const { createAlias } = require('../../../../api/phantomApi/aliases/createAlias')
const { recordEvent } = require('../../../../api/phantomApi/events/recordEvent')

async function offlineTriggerCreativeEvent(event) {
  console.log('offlineTriggerCreativeEvent', event)
  return recordEvent(event)
}

module.exports = { offlineTriggerCreativeEvent }
