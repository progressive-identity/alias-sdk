const eventsApiURL = 'https://events-api.cleverapps.io/v1/api'

function eventsRepository({ eventsHttpClient }) {
  return {
    createIdentity: () => {
      eventsHttpClient.post(`${eventsApiURL}/identities`, { data: 'dataobject' })
    },
  }
}

module.exports = { eventsRepository }
