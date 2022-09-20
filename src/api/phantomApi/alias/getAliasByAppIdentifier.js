const { phantomApiClient } = require('../PhantomApiAxios')
const endpoints = require('../endpoints')

async function getAliasByAppIdentifier(params) {
  const response = await phantomApiClient.get(endpoints.ALIAS, { params })
  return response.data.data
}

module.exports = { getAliasByAppIdentifier }
