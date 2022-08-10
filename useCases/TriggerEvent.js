const { ReadConfigFile } = require('./ReadConfigFile')
const { Event } = require('../domain/event')
const { locateService } = require('../infrastructure/config/locateService')
const { RecordEvent } = require('./RecordEvent')
const { SendEvent } = require('./SendEvent')
const { CreateIdentity } = require('./CreateIdentity')
const { CreateAlias } = require('./CreateAlias')
const { GetAliasById } = require('./GetAliasById')

async function TriggerEvent({ data }) {
  const service = locateService()
  const event = new Event(data)

  if (service.config.mode === 'live') {
    if (event.createsAlias === 'yes') {
      const {
        data: {
          ids: [identityId],
        },
      } = await CreateIdentity({
        companyId: data.companyId,
        eventsApiHttpClient: service.eventsApiHttpClient,
      })
      const {
        data: { id },
      } = await CreateAlias({
        data: { identityId, status: 'assigned' },
        phantomApiHttpClient: service.phantomApiHttpClient,
      })
      event.aliasId = id
    } else {
      const { data: alias } = await GetAliasById({
        aliasId: event.aliasId,
        phantomApiHttpClient: service.phantomApiHttpClient,
      })
    }
    const recordedEvent = await RecordEvent({ event, phantomApiHttpClient: service.phantomApiHttpClient })
    return SendEvent({ eventId: recordedEvent.id, phantomApiHttpClient: service.phantomApiHttpClient })
  }
  if (event.createsAlias === 'yes') {
    const {
      data: { id },
    } = await CreateAlias({ data: { status: 'assigned' }, phantomApiHttpClient: service.phantomApiHttpClient })
    event.aliasId = id
  } else {
    const { data: alias } = await GetAliasById({
      aliasId: event.aliasId,
      phantomApiHttpClient: service.phantomApiHttpClient,
    })
  }
  return RecordEvent({ event, phantomApiHttpClient: service.phantomApiHttpClient })
}

module.exports = { TriggerEvent }
