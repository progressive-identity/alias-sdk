const { phantomApiClient } = require('../PhantomApiAxios')

async function getAliasByAppIdentifier(params) {
  console.log('getAliasByAppIdentifier', { params })
  // TODO replace url by 'alias'
  const temp = {
    data: {
      name: 'member-mailchimp-id',
      description: 'id of a member in mailchimp',
    },
  }
  const response = await phantomApiClient.get('alias', { params })
  console.log(response)
  // return alias
}

module.exports = { getAliasByAppIdentifier }
