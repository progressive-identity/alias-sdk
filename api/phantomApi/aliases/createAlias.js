const { phantomApiClient } = require('../PhantomApiAxios')

async function createAlias(data) {
  console.log('createAlias', { data })
  const {
    data: { data: alias },
  } = await phantomApiClient.post('aliases', { data })
  console.log({ alias })
  return alias
}

module.exports = { createAlias }
