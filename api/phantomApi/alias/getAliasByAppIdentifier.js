const { phantomApiClient } = require('../PhantomApiAxios')

async function getAliasByAppIdentifier(params) {
  console.log('getAliasByAppIdentifier', { params })
  // TODO replace url by 'alias'
  const { data: alias } = await phantomApiClient.get('posts/1', { params })
  console.log({ alias })
  return alias
}

module.exports = { getAliasByAppIdentifier }
