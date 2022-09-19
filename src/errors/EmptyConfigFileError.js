const { MyError } = require('./MyError')

class EmptyConfigFileError extends MyError {
  constructor(message) {
    super(message)
    this.name = this.constructor.name
    this.message = 'Your file config file is empty, fill it according to the documentation'
  }
}

module.exports = { EmptyConfigFileError }
