const axios = require('axios')
const { configRepository } = require('../../repositories/configRepository')
const { authenticationRepository } = require('../../repositories/authenticationRepository')

const config = configRepository.loadConfigFile()
const authRepo = authenticationRepository()

const eventsApiClient = axios.create({
  baseURL: `${config.eventsApiBaseUrl}/v1/api`,
  timeout: 1000,
})

eventsApiClient.interceptors.request.use(async (requestConfig) => {
  const { access_token: token } = authRepo.getAuthState()
  const options = {
    ...requestConfig,
  }

  options.headers.authorization = `Bearer ${token}`
  return options
})

eventsApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error.message)
  }
)

module.exports = { eventsApiClient }
