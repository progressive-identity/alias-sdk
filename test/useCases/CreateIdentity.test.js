const { EventsApiHttpClientInMemory } = require('../../infrastructure/httpClients/eventsAPI/eventsApiHttpClientInMemory')
const { CreateIdentity } = require('../../useCases/CreateIdentity')

describe('CreateIdentity', () => {
  it('should create an identity on Events API', async () => {
    const data = {
      companyId: 1,
      units: 1,
    }
    const eventsApiHttpClient = new EventsApiHttpClientInMemory()
    eventsApiHttpClient.feedIdentityResponse({
      code: 201,
      data: {
        ids: [1],
      },
    })

    const response = await CreateIdentity({ data, eventsApiHttpClient })

    expect(response).toEqual(eventsApiHttpClient.postIdentities201Response)
  })
})
