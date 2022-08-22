const { endpoints } = require('../infrastructure/httpClients/phantomAPI/endpoints')

async function GetAliasByAppIdentifierAndAppIdentifierType({ params, phantomApiHttpClient }) {
  return phantomApiHttpClient.getByParams({
    endpoint: endpoints.alias,
    params,
  })
}

module.exports = { GetAliasByAppIdentifierAndAppIdentifierType }
