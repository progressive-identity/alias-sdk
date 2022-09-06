const { recordEvent } = require('../../../../api/phantomApi/events/recordEvent')
const { getAliasByAppIdentifier } = require('../../../../api/phantomApi/alias/getAliasByAppIdentifier')

async function offlineTriggerNotCreativeEvent(event) {
  console.log('offlineTriggerNotCreativeEvent', event)
  const response = await getAliasByAppIdentifier({
    appIdentifierTypeName: event.appIdentifier.name,
    appIdentifierValue: event.appIdentifier.value,
  })
  // return recordEvent({ ...event, aliasId })
}

module.exports = { offlineTriggerNotCreativeEvent }
