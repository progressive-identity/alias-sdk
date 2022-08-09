const { PhantomApiHttpClientInMemory } = require('../../infrastructure/httpClients/phantomAPI/phantomApiHttpClientInMemory')
const { RecordEvent } = require('../../useCases/RecordEvent')

describe('RecordEvent', () => {
  it('should create an event on Phantom API', async () => {
    const data = {
      aliasId: 1,
      eventTypeId: 1,
      processingRecordId: 1,
      purposeId: 1,
      returnInstructions: 'send',
      sentDataTypes: [
        {
          dataTypeId: 1,
          dataLocations: [
            {
              dataLocationId: 1,
              futureSelectors: [
                {
                  value: 'string',
                },
              ],
            },
          ],
        },
      ],
      createsAlias: 'no',
    }
    const phantomApiHttpClient = new PhantomApiHttpClientInMemory()
    phantomApiHttpClient.feedPostEventsResponse({
      code: 201,
      data: {
        id: 1,
        sentDate: '2022-05-10T12:27:33.105Z',
        eventTypeId: 1,
        processingRecordId: 1,
        purposeId: 1,
        returnInstructions: 'send',
        alias: {
          id: 1,
          identityId: 42,
        },
        sentDataTypes: [
          {
            dataTypeId: 1,
            dataLocations: [
              {
                dataLocationId: 0,
                futureSelectors: {
                  value: 'string',
                },
              },
            ],
          },
        ],
        createsAlias: 'no',
      },
    })

    const response = await RecordEvent({ data, phantomApiHttpClient })

    expect(response).toEqual(phantomApiHttpClient.postEvents201Response)
  })
})
