const { recordEvent } = require('../../../../api/phantomApi/events/recordEvent')
const { getAliasByAppIdentifier } = require('../../../../api/phantomApi/alias/getAliasByAppIdentifier')

async function offlineTriggerNotCreativeEvent(event) {
  console.log('offlineTriggerNotCreativeEvent', event)
  const { id: aliasId } = await getAliasByAppIdentifier({
    appIdentifierTypeName: event.appIdentifier.name,
    appIdentifierTypeValue: event.appIdentifier.value,
  })
  return recordEvent({ ...event, aliasId })
}

module.exports = { offlineTriggerNotCreativeEvent }
