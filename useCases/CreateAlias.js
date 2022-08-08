const { endpoints } = require('../infrastructure/httpClients/phantomAPI/endpoints')

async function CreateAlias({ data, phantomApiHttpClient }) {
  return phantomApiHttpClient.post({ endpoint: endpoints.aliases, data })
}

module.exports = { CreateAlias }
