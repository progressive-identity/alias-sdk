const path = require('path')
const { EmptyConfigFileError } = require('../errors/EmptyConfigFileError')
const { FileNotFoundError } = require('../errors/FileNotFoundError')

const CONFIG_FILE_NAME = 'aliasrc.json'

function ReadConfigFile({ fileSystem }) {
  const ownPath = process.cwd()
  const configPath = path.join(ownPath, CONFIG_FILE_NAME)
  const fileExists = fileSystem.existsSync(configPath)
  if (fileExists) {
    const rawConfig = fileSystem.readFileSync(configPath, 'utf8')
    if (rawConfig) {
      return JSON.parse(rawConfig)
    }
    throw new EmptyConfigFileError()
  }
  throw new FileNotFoundError()
}

module.exports = { ReadConfigFile }
