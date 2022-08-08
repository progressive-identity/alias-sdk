const { FutureSelector } = require('./futureSelector')

class DataLocation {
  constructor({ dataLocationId, futureSelectors }) {
    this.dataLocationId = dataLocationId
    this.futureSelectors = futureSelectors.map((futureSelector) => new FutureSelector(futureSelector))
  }
}

module.exports = { DataLocation }
