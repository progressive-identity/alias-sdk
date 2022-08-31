const { phantomApiClient } = require('../PhantomApiAxios')

async function recordEvent(data) {
  console.log('recordEvent', { data })
  // TODO: replace url by 'events'
  const {
    data: { data: eventWithoutId, id },
  } = await phantomApiClient.post('posts', { data })
  const event = { ...eventWithoutId, id }
  console.log({ event })
  return event
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
    "sentDataTypes": [
    {
      "dataTypeId": 1,
      "dataLocations": [
        {
          "dataLocationId": 1,
          "futureSelectors": [
            {
              "value": "string"
            }
          ]
        }
      ]
    }
  ],
    "createsAlias": "no"
}
} */
