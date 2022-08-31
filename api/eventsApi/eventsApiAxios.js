const axios = require('axios')
const { authenticationRepository } = require('../../repositories/authenticationRepository')

const auth = authenticationRepository({ identityBroker: axios, config: { mode: 'live' } })
const authorization = `Bearer ${auth.getAuthState()?.access_token}`

// TODO: replace baseURL by eventsApiBaseURL
const baseURL = 'https://jsonplaceholder.typicode.com/'
const eventsApiClient = axios.create({
  baseURL,
  timeout: 1000,
  // TODO: replace authorization by KeyCloakAuthorization
  headers: { Authorization: 'authorization' },
})

module.exports = { eventsApiClient }
