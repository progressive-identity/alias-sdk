require('dotenv').config()
const { configRepository } = require('./repositories/configRepository')
const authenticationRepository = require('./repositories/authenticationRepository')
const KeycloakAdapter = require('./repositories/KeycloakAdapter')

let _instance = null

/* const authenticationResponse = await authenticate({
  payload: {
    clientId: config.clientId,
    clientSecret: config.clientSecret,
  },
  authenticationRepository,
}) */
function Alias() {
  const config = configRepository.loadConfigFile()

  authenticationRepository({
    identityBroker: KeycloakAdapter,
    config: {
      clientId: config.clientId,
      clientKey: config.clientKey,
      authServerUrl: config.authServerUrl,
      authRealm: config.authRealm,
    },
  }).authenticate()

  if (_instance) return _instance
  _instance = this
}

const alias = new Alias()
console.log(alias)
module.exports = Alias
