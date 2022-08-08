const { endpoints } = require('../infrastructure/httpClients/phantomAPI/endpoints')

async function RecordEvent({ event, phantomApiHttpClient }) {
  return phantomApiHttpClient.post({ endpoint: endpoints.events, event })
}

module.exports = { RecordEvent }
