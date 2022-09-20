const { getAliasByAppIdentifier } = require('../../../../api/phantomApi/alias/getAliasByAppIdentifier')
const { sendEvent } = require('../../../../api/phantomApi/send-events/sendEvent')
const { recordEvent } = require('../../../../api/phantomApi/events/recordEvent')

async function liveTriggerNotCreativeEvent(event) {
  const { id: aliasId } = await getAliasByAppIdentifier({
    appIdentifierValue: event.appIdentifier.value,
    appIdentifierTypeName: event.appIdentifier.name,
  })
  const recordedEvent = await recordEvent({ ...event, aliasId })
  return sendEvent({ eventId: recordedEvent.id })
}

module.exports = { liveTriggerNotCreativeEvent }
