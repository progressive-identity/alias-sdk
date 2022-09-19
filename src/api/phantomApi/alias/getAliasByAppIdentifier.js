const { phantomApiClient } = require('../PhantomApiAxios')

async function getAliasByAppIdentifier(params) {
  const response = await phantomApiClient.get('alias', { params })
  return response.data.data
}

module.exports = { getAliasByAppIdentifier }
