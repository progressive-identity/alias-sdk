const { sendEvent } = require('../../../../api/phantomApi/send-events/sendEvent')
const { recordEvent } = require('../../../../api/phantomApi/events/recordEvent')

async function liveTriggerCreativeEvent(event) {
  const { id: eventId } = await recordEvent({ ...event })
  return sendEvent({ eventId })
}

module.exports = { liveTriggerCreativeEvent }
