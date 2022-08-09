const { PhantomApiHttpClientInMemory } = require('../../infrastructure/httpClients/phantomAPI/phantomApiHttpClientInMemory')
const { CreateAlias } = require('../../useCases/CreateAlias')

describe('CreateAlias', () => {
  it('should create an alias on Phantom API', async () => {
    const data = {
      identityId: 99,
      status: 'deactivated',
    }
    const phantomApiHttpClient = new PhantomApiHttpClientInMemory()
    phantomApiHttpClient.feedPostAliasesResponse({
      code: 200,
      data: {
        id: 33,
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

    const response = await CreateAlias({ data, phantomApiHttpClient })

    expect(response).toEqual(phantomApiHttpClient.postAliases201Response)
  })
})
