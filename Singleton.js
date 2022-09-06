require('dotenv').config()
const { configRepository } = require('./repositories/configRepository')
const { authenticationRepository } = require('./repositories/authenticationRepository')
const { KeycloakAdapter } = require('./adapters/secondary/KeycloakAdapter')
const { triggerEvent } = require('./index')
const { tempEvent } = require('./api/eventsApi/companies/tempEvent')

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
    .then(async () => {
      await triggerEvent({
        createsAlias: 'yes',
        eventTypeId: 41,
        processingRecordId: 37,
        purposeId: 67,
        returnInstructions: 'send',
        /* appIdentifier: {
           name: 'member-mailchimp-id',
           value: 'ds1-ds123-23d',
         }, */
      })
    })

  this.triggerEvent = triggerEvent

  if ($instance) return $instance
  $instance = this
}

module.exports = new Alias()
