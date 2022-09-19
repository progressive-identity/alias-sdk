const { KeycloakAdapter } = require('../adapters/secondary/KeycloakAdapter')

function authenticationRepository({ identityBroker = new KeycloakAdapter() } = {}) {
  return {
    authenticate: () => {
      // const client = $instance.authClient
      return identityBroker.getAccessToken().then(() => {
        setInterval(() => identityBroker.getAccessToken(), identityBroker.getAuthState()?.expires_at || 3600)
      })
    },
    getAuthState: () => {
      return identityBroker.getAuthState()
    },
  }
}

module.exports = { authenticationRepository }
