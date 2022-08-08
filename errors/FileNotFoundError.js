const { MyError } = require('./MyError')

class FileNotFoundError extends MyError {
  constructor(message) {
    super(message)
    this.name = this.constructor.name
    this.message = 'Please create "aliasrc.json" at the root of your project and fill it according to the documentation'
  }
}

module.exports = { FileNotFoundError }
