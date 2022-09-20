require('dotenv').config()
const { makeTriggerEvent } = require('./src/events/trigger/makeTriggerEvent')
const { configRepository } = require('./src/repositories/configRepository')

let $instance = null

function Alias(configRepo = configRepository) {
  const { mode } = configRepo.loadConfigFile()

  this.triggerEvent = makeTriggerEvent(mode)

  if ($instance) return $instance
  $instance = this
}

module.exports = Alias
