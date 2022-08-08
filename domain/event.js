const { SentDataType } = require('./sentDataType')

class Event {
  constructor({ aliasId, createsAlias, eventTypeId, processingRecordId, purposeId, returnInstructions, sentDataTypes }) {
    this.aliasId = aliasId
    this.createsAlias = createsAlias
    this.eventTypeId = eventTypeId
    this.processingRecordId = processingRecordId
    this.purposeId = purposeId
    this.sentDataTypes = sentDataTypes.map((sentDataType) => new SentDataType(sentDataType))
    this.returnInstructions = returnInstructions
  }
}

module.exports = { Event }
