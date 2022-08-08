const { endpoints } = require('../infrastructure/httpClients/phantomAPI/endpoints')

async function GetAliasById({ aliasId, phantomApiHttpClient }) {
  return phantomApiHttpClient.getById({ endpoint: endpoints.aliases, id: aliasId })
}

module.exports = { GetAliasById }
