const { eventsApiClient } = require('../eventsApiAxios')

async function getCompanyId() {
  console.log('getCompanyId')
  const {
    data: {
      data: [{ id: companyId }],
    },
  } = await eventsApiClient.get('companies')
  console.log({ companyId })
  return companyId
}

module.exports = { getCompanyId }
