const { PhantomApiHttpClientInMemory } = require('../../infrastructure/httpClients/phantomAPI/phantomApiHttpClientInMemory')
const { SendEvent } = require('../../useCases/SendEvent')

describe('SendEvent', () => {
  it('this should trigger the sending of an event from Phantom API to Events API', async () => {
    const params = { id: 42 }
    const phantomApiHttpClient = new PhantomApiHttpClientInMemory()
    phantomApiHttpClient.feedPostEventsResponse({
      code: 201,
      data: {
        id: 42,
        identityId: 1,
        sentDate: '2022-05-10T12:27:33.105Z',
        eventTypeId: 1,
        processingRecordId: 1,
        purposeId: 1,
        returnInstructions: 'send',
        sentDataTypes: [
          {
            dataTypeId: 0,
            dataLocationIds: [0],
          },
        ],
      },
    })

    const response = await SendEvent({ params, phantomApiHttpClient })

    expect(response).toEqual(phantomApiHttpClient.postSendEvents201Response)
  })
})
