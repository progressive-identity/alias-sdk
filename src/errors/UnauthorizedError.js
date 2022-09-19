class UnauthorizedError extends Error {
  constructor(message) {
    super(message)
    this.name = this.constructor.name
    this.message = 'You are not authorized to perform this action'
  }
}

module.exports = { UnauthorizedError }
