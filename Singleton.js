require('dotenv').config()
const { configRepository } = require('./repositories/configRepository')
const { authenticationRepository } = require('./repositories/authenticationRepository')
const { KeycloakAdapter } = require('./adapters/secondary/KeycloakAdapter')
const { getCompanyId } = require('./api/eventsApi/companies/getCompanyId')
const { triggerEvent } = require('./index')

let $instance = null

function Alias() {
  const $config = configRepository.loadConfigFile()
  authenticationRepository({
    identityBroker: new KeycloakAdapter($config),
    config: {
      clientId: $config.clientId,
      clientKey: $config.clientKey,
      authServerUrl: $config.authServerUrl,
      authRealm: $config.authRealm,
    },
  })
    .authenticate()
    .then(() => {
      getCompanyId()
    })

  this.triggerEvent = triggerEvent

  if ($instance) return $instance
  $instance = this
}

module.exports = new Alias()
