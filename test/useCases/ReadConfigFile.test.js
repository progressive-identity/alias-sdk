const { ReadConfigFile } = require('../../useCases/ReadConfigFile')
const { FileSystemInMemory } = require('../../infrastructure/fileSystems/fileSystemInMemory')
const { FileNotFoundError } = require('../../errors/FileNotFoundError')
const { EmptyConfigFileError } = require('../../errors/EmptyConfigFileError')

describe('ReadConfigFile', () => {
  it('should read the config file', () => {
    const fileSystem = new FileSystemInMemory()
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
      fileSystem.config = undefined
      const result = () => ReadConfigFile({ fileSystem })
      expect(result).toThrow(EmptyConfigFileError)
    })
  })
})
