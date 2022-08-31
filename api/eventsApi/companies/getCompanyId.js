const { eventsApiClient } = require('../eventsApiAxios')

async function getCompanyId() {
  console.log('getCompanyId')

  //   const { common: headers } = config.headers
  //   headers.Authorization = `Bearer ${token}`
  const {
    data: [{ id: companyId }],
  } = await eventsApiClient.get('posts')
  console.log({ companyId })
  return companyId
}

module.exports = { getCompanyId }
