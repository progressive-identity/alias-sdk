const axios = require('axios')
// TODO: replace baseURL by eventsApiBaseURL
const baseURL = 'https://jsonplaceholder.typicode.com/'
const phantomApiClient = axios.create({
  baseURL,
  timeout: 1000,
  // TODO: replace authorization by KeyCloakAuthorization
  headers: { Authorization: 'authorization' },
})

module.exports = { phantomApiClient }
