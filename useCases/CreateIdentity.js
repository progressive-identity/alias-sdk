const { endpoints } = require('../infrastructure/httpClients/eventsAPI/endpoints')

async function CreateIdentity({ companyId, eventsApiHttpClient }) {
  return eventsApiHttpClient.post({ endpoint: endpoints.identities, data: { companyId } })
}

module.exports = { CreateIdentity }
