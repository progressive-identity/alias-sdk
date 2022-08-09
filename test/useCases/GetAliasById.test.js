const { PhantomApiHttpClientInMemory } = require('../../infrastructure/httpClients/phantomAPI/phantomApiHttpClientInMemory')
const { GetAliasById } = require('../../useCases/GetAliasById')

describe('GetAliasById', () => {
  it('should get an alias from Phantom API by ID', async () => {
    const params = {
      id: 99,
    }
    const phantomApiHttpClient = new PhantomApiHttpClientInMemory()
    phantomApiHttpClient.feedGetAliasByIdResponse({
      code: 200,
      data: {
        id: 10,
        identityId: 32,
        status: 'assigned',
        appIdentifiers: [
          {
            id: 1,
            value: 'myValue',
            type: {
              id: 2,
              name: 'mailchimp-member-id',
              description: 'id of a member in mailchimp',
            },
          },
        ],
        selectors: [
          {
            id: 1,
            value: 'myValue',
            dataTypeInstanceId: 'string',
          },
        ],
      },
    })

    const response = await GetAliasById({ params, phantomApiHttpClient })

    expect(response).toEqual(phantomApiHttpClient.getAliasesAliasId200Response)
  })
})
