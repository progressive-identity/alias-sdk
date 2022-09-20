const KcAdminClient = require('@keycloak/keycloak-admin-client').default
const jwt = require('jsonwebtoken')
const { UnauthorizedError } = require('../../errors/UnauthorizedError')
const { configRepository } = require('../../repositories/configRepository')

let $instance = null
const $options = configRepository.loadConfigFile()

function KeycloakAdapter(config = $options) {
  const clientCredentials = Object.freeze({
    grantType: 'client_credentials',
    clientId: config.clientId,
    clientSecret: config.clientKey,
  })

  this.authState = {}

  this.adminClient = new KcAdminClient({
    realmName: config.authRealm,
    baseUrl: `${config.authServerUrl}/auth`,
  })

  this.getAuthState = function getAuthState() {
    return this.authState
  }

  this.getAccessToken = async function getAccessToken() {
    try {
      // Authenticate
      await this.adminClient.auth(clientCredentials)
      const token = await this.adminClient.getAccessToken()

      // Store state
      this.authState = jwt.decode(token)
      this.authState.access_token = token
      this.authState.expires_at = Math.abs(new Date(this.authState.exp * 1000) - new Date())
    } catch (error) {
      throw new UnauthorizedError()
    }
  }

  if ($instance) return $instance
  $instance = this
}

module.exports = { KeycloakAdapter }
