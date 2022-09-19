const { phantomApiClient } = require('../PhantomApiAxios')

async function recordEvent(data) {
  const response = await phantomApiClient.post('events', { data })
  return response.data.data
}

module.exports = { recordEvent }

/*
waited Body
{
  "data": {
  "aliasId": 1,
    "eventTypeId": 1,
    "processingRecordId": 1,
    "purposeId": 1,
    "returnInstructions": "send",
    "createsAlias": "no"
}
} */
