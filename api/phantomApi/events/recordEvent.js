const { phantomApiClient } = require('../PhantomApiAxios')

async function recordEvent(data) {
  console.log('recordEvent', { data })
  const response = await phantomApiClient.post('events', { data })

  console.log(response)
  // return event
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
