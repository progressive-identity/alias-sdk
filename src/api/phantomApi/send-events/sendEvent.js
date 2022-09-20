const { phantomApiClient } = require('../PhantomApiAxios')
const endpoints = require('../endpoints')

async function sendEvent({ eventId }) {
  const response = await phantomApiClient.post(`${endpoints.SEND_EVENTS}/${eventId}`)
  return response.data.data
}

module.exports = { sendEvent }
