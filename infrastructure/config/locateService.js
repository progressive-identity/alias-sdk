const { PhantomApiHttpClientInMemory } = require('../httpClients/phantomAPI/phantomApiHttpClientInMemory')
const { EventsApiHttpClientInMemory } = require('../httpClients/eventsAPI/eventsApiHttpClientInMemory')
const { PhantomApiHttpClientAxios } = require('../httpClients/phantomAPI/phantomApiHttpClientAxios')
const { EventsApiHttpClientAxios } = require('../httpClients/eventsAPI/eventsApiHttpClientAxios')
const { ReadConfigFile } = require('../../useCases/ReadConfigFile')
const { FileSystemInMemory } = require('../fileSystems/fileSystemInMemory')
const { FileSystemDisk } = require('../fileSystems/fileSystemDisk')

function locateService() {
  const service = {}
  if (!process.env.DEMO) {
    const fileSystem = new FileSystemInMemory()
    service.config = ReadConfigFile({ fileSystem })
    service.phantomApiHttpClient = new PhantomApiHttpClientInMemory()
    service.eventsApiHttpClient = new EventsApiHttpClientInMemory()
  } else {
    const fileSystem = new FileSystemDisk()
    service.config = ReadConfigFile({ fileSystem })
    service.phantomApiHttpClient = new PhantomApiHttpClientAxios({ config: service.config })
    service.eventsApiHttpClient = new EventsApiHttpClientAxios({ config: service.config })
  }
  return service
}

module.exports = { locateService }
