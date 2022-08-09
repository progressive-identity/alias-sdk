const { ReadConfigFile } = require('../../useCases/ReadConfigFile')
const { FileSystemInMemory } = require('../../infrastructure/fileSystems/fileSystemInMemory')
const { FileNotFoundError } = require('../../errors/FileNotFoundError')
const { EmptyConfigFileError } = require('../../errors/EmptyConfigFileError')

describe('ReadConfigFile', () => {
  it('should read the config file', () => {
    const fileSystem = new FileSystemInMemory()
    const properConfig = {
      env: 'development',
      mode: 'live',
      protocol: 'http',
      eventsApiDomain: 'events-api.cleverapps.io',
      phantomApiUrl: 'PHANTOM_API_DOMAIN',
      phantomApiPort: '5666',
      phantomVersion: 'localhost',
    }
    fileSystem.feedConfig(properConfig)

    const config = ReadConfigFile({ fileSystem })

    expect(config).toEqual(fileSystem.config)
  })
  describe('should throw an error if the config file', () => {
    it('does not exist', () => {
      const fileSystem = new FileSystemInMemory()
      fileSystem.fileExists = false

      const result = () => ReadConfigFile({ fileSystem })

      expect(result).toThrow(FileNotFoundError)
    })
    it('is empty', () => {
      const fileSystem = new FileSystemInMemory()
      const emptyConfig = undefined
      fileSystem.feedConfig(emptyConfig)

      const result = () => ReadConfigFile({ fileSystem })

      expect(result).toThrow(EmptyConfigFileError)
    })
  })
})
