const KcAdminClient = require('@keycloak/keycloak-admin-client').default
const jwt = require('jsonwebtoken')
const { UnauthorizedError } = require('../../errors/UnauthorizedError')

let authState = {}

function KeycloakAdapter(config) {
  const adminClient = new KcAdminClient({
    realmName: config.authRealm,
    baseUrl: `${config.authServerUrl}/auth`,
  })

  const clientCredentials = Object.freeze({
    grantType: 'client_credentials',
    clientId: config.clientId,
    clientSecret: config.clientKey,
  })

  return {
    getAuthState: () => authState,
    getAccessToken: async () => {
      try {
        // Authenticate
        await adminClient.auth(clientCredentials)
        const token = await adminClient.getAccessToken()

        // Store state
        authState = jwt.decode(token)
        authState.access_token = token
        authState.expires_at = Math.abs(new Date(authState.exp * 1000) - new Date())
        console.log(authState)
      } catch (error) {
        throw new UnauthorizedError()
      }
    },
    refreshToken: () => {
      // SDK AccessToken refreshing logic : can be used only when we have a RefreshToken
      // 1. Called upon TokenExpiredError
    },
  }
}

module.exports = { KeycloakAdapter }
