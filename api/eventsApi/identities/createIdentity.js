const { eventsApiClient } = require('../eventsApiAxios')

async function createIdentity(data) {
  console.log('createIdentity', { data })
  const {
    data: { id, data: identityWithoutId },
  } = await eventsApiClient.post('posts', { data: { ...data, units: 1 } })
  const identity = { ...identityWithoutId, id }
  console.log({ identity })
  return identity
}

module.exports = { createIdentity }
