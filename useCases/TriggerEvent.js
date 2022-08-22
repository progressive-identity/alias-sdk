const { Event } = require('../domain/event')
const { locateService } = require('../infrastructure/config/locateService')
const { RecordEvent } = require('./RecordEvent')
const { SendEvent } = require('./SendEvent')
const { CreateIdentity } = require('./CreateIdentity')
const { CreateAlias } = require('./CreateAlias')
const { GetAliasByAppIdentifierAndAppIdentifierType } = require('./GetAliasByAppIdentifierAndAppIdentifierType')

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
      const { data: alias } = await GetAliasByAppIdentifierAndAppIdentifierType({
        appIdentifierTypeName: event.appIdentifier.type,
        appIdentifierValue: event.appIdentifier.value,
        phantomApiHttpClient: service.phantomApiHttpClient,
      })
      event.aliasId = alias.id
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
    const { data: alias } = await GetAliasByAppIdentifierAndAppIdentifierType({
      aliasId: event.aliasId,
      phantomApiHttpClient: service.phantomApiHttpClient,
    })
    event.aliasId = alias.id
  }
  return RecordEvent({ event, phantomApiHttpClient: service.phantomApiHttpClient })
}

module.exports = { TriggerEvent }
