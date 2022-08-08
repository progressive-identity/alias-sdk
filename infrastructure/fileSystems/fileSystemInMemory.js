class FileSystemInMemory {
  config = {
    env: 'development',
    mode: 'live',
    protocol: 'http',
    eventsApiDomain: 'events-api.cleverapps.io',
    phantomApiUrl: 'PHANTOM_API_DOMAIN',
    phantomApiPort: '5666',
    phantomVersion: 'localhost',
  }

  fileExists = true

  existsSync() {
    return this.fileExists
  }

  readFileSync() {
    return JSON.stringify(this.config)
  }
}

module.exports = { FileSystemInMemory }
