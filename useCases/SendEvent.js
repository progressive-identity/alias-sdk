const { endpoints } = require('../infrastructure/httpClients/phantomAPI/endpoints')

async function SendEvent({ eventId, phantomApiHttpClient }) {
  return phantomApiHttpClient.postById({ endpoint: endpoints.sendEvents, id: eventId })
}

module.exports = { SendEvent }
