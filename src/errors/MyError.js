class MyError extends Error {
  constructor(message) {
    super(message)
    this.name = this.constructor.name
    this.status = 'error'
  }
}

module.exports = { MyError }
