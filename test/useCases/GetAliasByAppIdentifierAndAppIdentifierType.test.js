const { PhantomApiHttpClientInMemory } = require('../../infrastructure/httpClients/phantomAPI/phantomApiHttpClientInMemory')
const { GetAliasByAppIdentifierAndAppIdentifierType } = require('../../useCases/GetAliasByAppIdentifierAndAppIdentifierType')

describe('GetAliasByAppIdentifierAndAppIdentifierType', () => {
  it('should get an alias from Phantom API by appIdentifierTypeName && appIdentifierValue', async () => {
    const params = {
      appIdentifierTypeName: 'website-users-id', // defined in Phantom, see section 2 of documentation
      appIdentifierValue: 'createdSubscriberId',
    }
    const phantomApiHttpClient = new PhantomApiHttpClientInMemory()
    const response = await GetAliasByAppIdentifierAndAppIdentifierType({ params, phantomApiHttpClient })
    expect(response).toEqual(phantomApiHttpClient.getAliasAppIdentifierAppIdentifierType200Response)
  })
})
