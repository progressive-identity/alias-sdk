const axios = require('axios')
const { phantomRepository } = require('./phantomRepository')

const phantomRepositoryAxios = phantomRepository(axios)
module.exports = { phantomRepositoryAxios }

// async function authenticateRequest(config) {
//   const token = authenticationRepository.getAuthState()?.access_token
//   const { common: headers } = config.headers
//   headers.Authorization = `Bearer ${token}`

//   return config
// }

// axios.interceptors.request.use(authenticateRequest)
