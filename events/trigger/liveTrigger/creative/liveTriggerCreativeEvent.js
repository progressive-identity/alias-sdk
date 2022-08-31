const { createIdentity } = require('../../../../api/eventsApi/identities/createIdentity')
const { createAlias } = require('../../../../api/phantomApi/aliases/createAlias')
const { sendEvent } = require('../../../../api/phantomApi/send-events/sendEvent')
const { getCompanyId } = require('../../../../api/eventsApi/companies/getCompanyId')
const { recordEvent } = require('../../../../api/phantomApi/events/recordEvent')

async function liveTriggerCreativeEvent(event) {
  console.log('liveTriggerCreativeEvent', { event })
  const companyId = await getCompanyId()
  const { id: identityId } = await createIdentity({ companyId })
  const { id: aliasId } = await createAlias({ identityId, status: 'assigned' })
  const { id: eventId } = await recordEvent({ ...event, aliasId })
  return sendEvent({ eventId })
}

module.exports = { liveTriggerCreativeEvent }
