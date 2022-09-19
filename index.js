require('dotenv').config()
const { configRepository } = require('./src/repositories/configRepository')
const { authenticationRepository } = require('./src/repositories/authenticationRepository')
const { KeycloakAdapter } = require('./src/adapters/secondary/KeycloakAdapter')
const { makeTriggerEvent } = require('./src/events/trigger/makeTriggerEvent')

let $instance = null

function Alias() {
  const { authRealm, authServerUrl, clientId, clientKey, mode } = configRepository.loadConfigFile()
  this.triggerEvent = makeTriggerEvent(mode)

  authenticationRepository({
    identityBroker: new KeycloakAdapter(),
    config: {
      clientId,
      clientKey,
      authServerUrl,
      authRealm,
    },
  }).authenticate()
  if ($instance) return $instance
  $instance = this
}

const alias = new Alias()
module.exports = alias

alias.triggerEvent({
  createsAlias: 'yes',
  eventTypeId: 41,
  processingRecordId: 37,
  purposeId: 67,
  returnInstructions: 'send',
  /*   appIdentifier: {
      name: 'member-mailchimp-id',
      value: 'ds1-ds123-23d',
    }, */
})
