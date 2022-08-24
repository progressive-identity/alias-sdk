const KcAdminClient = require('@keycloak/keycloak-admin-client').default
const jwt = require('jsonwebtoken')

const { UnauthorizedError } = require('../errors/UnauthorizedError')

module.exports = (config) => {
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
    getAuthState: () => {},
    getAccessToken: async () => {
      try {
        await adminClient.auth(clientCredentials)
        const token = await adminClient.getAccessToken()
        const decodedToken = jwt.decode(token)
        console.log({ decodedToken })
      } catch (error) {
        console.log(error.toJSON())
        throw new UnauthorizedError()
      }
      // 2. Setup auth state ( i.e isLoggedIn, expiresAt )
    },
    refreshToken: () => {
      // SDK AccessToken refreshing logic
      // 1. Called upon TokenExpiredError
    },
  }
}
