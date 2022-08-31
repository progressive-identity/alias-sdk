const { eventsApiClient } = require('../eventsApiAxios')

async function getCompanyId() {
  console.log('getCompanyId')
  const response = await eventsApiClient.get('companies')
  console.log(response)
  return 1
}

module.exports = { getCompanyId }
