const { PhantomApiHttpClientInMemory } = require('../../infrastructure/httpClients/phantomAPI/phantomApiHttpClientInMemory')
const { SendEvent } = require('../../useCases/SendEvent')

describe('SendEvent', () => {
  it('this should trigger the sending of an event from Phantom API to Events API', async () => {
    const params = { id: 42 }
    const phantomApiHttpClient = new PhantomApiHttpClientInMemory()
    const response = await SendEvent({ params, phantomApiHttpClient })
    expect(response).toEqual(phantomApiHttpClient.postSendEvents201Response)
  })
})
