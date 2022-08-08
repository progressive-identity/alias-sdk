const { PhantomApiHttpClientInMemory } = require('../../infrastructure/httpClients/phantomAPI/phantomApiHttpClientInMemory')
const { GetAliasById } = require('../../useCases/GetAliasById')

describe('GetAliasById', () => {
  it('should get an alias from Phantom API by ID', async () => {
    const params = {
      id: 99,
    }
    const phantomApiHttpClient = new PhantomApiHttpClientInMemory()
    const response = await GetAliasById({ params, phantomApiHttpClient })
    expect(response).toEqual(phantomApiHttpClient.getAliasesAliasId200Response)
  })
})
