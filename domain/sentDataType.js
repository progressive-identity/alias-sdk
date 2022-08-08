const { DataLocation } = require('./dataLocation')

class SentDataType {
  constructor({ dataLocations, dataTypeId }) {
    this.dataTypeId = dataTypeId
    this.dataLocations = dataLocations.map((dataLocation) => new DataLocation(dataLocation))
  }
}

module.exports = { SentDataType }
