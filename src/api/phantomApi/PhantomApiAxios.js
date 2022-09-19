const axios = require('axios')
const { configRepository } = require('../../repositories/configRepository')
const { authenticationRepository } = require('../../repositories/authenticationRepository')

const config = configRepository.loadConfigFile()
const authRepo = authenticationRepository()

const phantomApiClient = axios.create({
  baseURL: `${config.phantomApiBaseUrl}/v1/api`,
  timeout: 3000,
})

phantomApiClient.interceptors.request.use(async (requestConfig) => {
  const { access_token: token } = authRepo.getAuthState()
  const options = {
    ...requestConfig,
  }

  options.headers.common.authorization = `Bearer ${token}`

  return options
})

phantomApiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(error.message)
  }
)

module.exports = { phantomApiClient }
