const { phantomApiClient } = require('../PhantomApiAxios')

async function sendEvent({ eventId }) {
  const response = await phantomApiClient.post(`send-events/${eventId}`)
  return response.data.data
}

module.exports = { sendEvent }
