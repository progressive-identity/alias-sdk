const { KeycloakAdapter } = require('../adapters/secondary/KeycloakAdapter')

function authenticationRepository({ identityBroker = new KeycloakAdapter() } = {}) {
  return {
    authenticate: () => {
      return identityBroker.getAccessToken()
    },
    getAuthState: () => {
      return identityBroker.getAuthState()
    },
  }
}

module.exports = { authenticationRepository }
