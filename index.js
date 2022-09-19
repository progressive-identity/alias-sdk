require('dotenv').config()
const { makeTriggerEvent } = require('./src/events/trigger/makeTriggerEvent')
const { authenticationRepository } = require('./src/repositories/authenticationRepository')
const { configRepository } = require('./src/repositories/configRepository')

let $instance = null

const makeAlias = (configRepo = configRepository, authRepo = authenticationRepository) =>
  function Alias() {
    const { mode } = configRepo.loadConfigFile()
    this.triggerEvent = makeTriggerEvent(mode)
    authRepo().authenticate()
    if ($instance) return $instance
    $instance = this
  }

module.exports = makeAlias()
