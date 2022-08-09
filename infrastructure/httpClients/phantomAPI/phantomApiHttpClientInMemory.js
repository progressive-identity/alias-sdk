const { endpoints } = require('./endpoints')

class PhantomApiHttpClientInMemory {
  postEvents201Response = {
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
  }

  postSendEvents201Response = {
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
  }

  postAliases201Response = {
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
  }

  getAliasesAliasId200Response

  async post({ endpoint }) {
    const responseByEndpoint = {
      [endpoints.events]: this.postEvents201Response,
      [endpoints.aliases]: this.postAliases201Response,
    }
    return responseByEndpoint[endpoint]
  }

  async postById({ endpoint }) {
    const responseByEndpoint = { [endpoints.sendEvents]: this.postSendEvents201Response }
    return responseByEndpoint[endpoint]
  }

  async getById({ endpoint }) {
    const responseByEndpoint = { [endpoints.aliases]: this.getAliasesAliasId200Response }
    return responseByEndpoint[endpoint]
  }

  feedGetAliasByIdResponse(response) {
    this.getAliasesAliasId200Response = response
  }
}

module.exports = { PhantomApiHttpClientInMemory }
