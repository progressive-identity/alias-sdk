const { recordEvent } = require('../../../../api/phantomApi/events/recordEvent')

async function offlineTriggerCreativeEvent(event) {
  return recordEvent(event)
}

module.exports = { offlineTriggerCreativeEvent }
