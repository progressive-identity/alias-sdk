const { endpoints } = require('./endpoints')

class PhantomApiHttpClientInMemory {
  postEvents201Response

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

  postAliases201Response

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

  feedPostAliasesResponse(response) {
    this.postAliases201Response = response
  }

  feedPostEventsResponse(response) {
    this.postEvents201Response = response
  }
}

module.exports = { PhantomApiHttpClientInMemory }
