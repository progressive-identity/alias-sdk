const { createAlias } = require('../../../../api/phantomApi/aliases/createAlias')
const { recordEvent } = require('../../../../api/phantomApi/events/recordEvent')

async function offlineTriggerCreativeEvent(event) {
  console.log('offlineTriggerCreativeEvent', event)
  const { id: aliasId } = await createAlias({ status: 'unassigned' })
  return recordEvent({ ...event, aliasId })
}

module.exports = { offlineTriggerCreativeEvent }
