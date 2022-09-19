const { phantomApiClient } = require('../PhantomApiAxios')

async function createAlias(data) {
  const response = await phantomApiClient.post('aliases', { data })
  return response.data.data
}

module.exports = { createAlias }
