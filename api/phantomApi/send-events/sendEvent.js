const { phantomApiClient } = require('../PhantomApiAxios')

async function sendEvent(params) {
  console.log('sendEvent', params)
  // TODO replace url by 'send-events'
  const {
    data: { data: eventWithoutId, id },
  } = await phantomApiClient.post('posts', { params })
  const event = { ...eventWithoutId, id }
  console.log({ event })
  return event
}

module.exports = { sendEvent }
