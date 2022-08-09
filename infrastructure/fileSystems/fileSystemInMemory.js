class FileSystemInMemory {
  config

  fileExists = true

  existsSync() {
    return this.fileExists
  }

  readFileSync() {
    return JSON.stringify(this.config)
  }

  feedConfig(config) {
    this.config = config
  }
}

module.exports = { FileSystemInMemory }
