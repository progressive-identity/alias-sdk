function authenticationRepository({ identityBroker, config }) {
  const authClient = identityBroker(config)

  return {
    authenticate: async () => {
      await authClient.getAccessToken()
      setInterval(() => authClient.getAccessToken(), authClient.getAuthState()?.expiredAt || 3600)
    },
  }
}

module.exports = authenticationRepository
