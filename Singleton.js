require('dotenv').config()
const { configRepository } = require('./repositories/configRepository')
const { authenticationRepository } = require('./repositories/authenticationRepository')
const { KeycloakAdapter } = require('./adapters/secondary/KeycloakAdapter')

let $instance = null

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

  // this.triggerEvent = function triggerEvent() {
  //   triggerEvent()
  // }

  if ($instance) return $instance
  $instance = this
}

module.exports = new Alias()
