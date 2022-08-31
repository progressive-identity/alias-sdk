const { phantomApiClient } = require('../PhantomApiAxios')

async function createAlias(data) {
  console.log('createAlias', { data })
  // TODO replace url by 'aliases'
  const {
    data: { data: aliasWithoutId, id },
  } = await phantomApiClient.post('posts', { data })
  const alias = { ...aliasWithoutId, id }
  console.log({ alias })
  return alias
}

module.exports = { createAlias }
