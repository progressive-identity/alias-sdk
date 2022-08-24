const path = require('path')
const Joi = require('joi')
const fs = require('fs')
const { ConfigFileMissingError } = require('../errors/ConfigFileMissingError')
const { InvalidConfigFileError } = require('./invalidConfigFileError')

function configRepository({ filesystem }) {
  const readConfigFile = () => {
    const CONFIG_FILE_NAME = 'aliasrc.json'
    const ownPath = process.cwd()
    const configFilePath = path.join(ownPath, CONFIG_FILE_NAME)
    const fileExists = filesystem.existsSync(configFilePath)
    if (!fileExists) {
      throw new ConfigFileMissingError()
    }
    return filesystem.readFileSync(configFilePath, 'utf8')
  }

  const parseConfigFile = (config) => {
    try {
      return JSON.parse(config)
    } catch (error) {
      throw new InvalidConfigFileError(error.message)
    }
  }

  const validateConfigFile = (config) => {
    const configSchema = Joi.object({
      clientId: Joi.string().required(),
      clientKey: Joi.string().required(),
      mode: Joi.string().valid('live', 'offline').required(),
      authServerUrl: Joi.string().required(),
      authRealm: Joi.string().required(),
    })
    const { error } = configSchema.validate(config)
    if (error) {
      throw new InvalidConfigFileError(error.message)
    }
    return true
  }
  return {
    loadConfigFile: () => {
      const config = parseConfigFile(readConfigFile())
      validateConfigFile(config)
      return config
    },
  }
}

module.exports = { configRepository: configRepository({ filesystem: fs }) }
