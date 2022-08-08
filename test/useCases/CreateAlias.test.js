const { PhantomApiHttpClientInMemory } = require('../../infrastructure/httpClients/phantomAPI/phantomApiHttpClientInMemory')
const { CreateAlias } = require('../../useCases/CreateAlias')

describe('CreateAlias', () => {
  it('should create an alias on Phantom API', async () => {
    const data = {
      identityId: 99,
      status: 'deactivated',
    }
    const phantomApiHttpClient = new PhantomApiHttpClientInMemory()
    const response = await CreateAlias({ data, phantomApiHttpClient })
    expect(response).toEqual(phantomApiHttpClient.postAliases201Response)
  })
})
