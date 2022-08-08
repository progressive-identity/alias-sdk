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
    const response = await RecordEvent({ data, phantomApiHttpClient })
    expect(response).toEqual(phantomApiHttpClient.postEvents201Response)
  })
})
