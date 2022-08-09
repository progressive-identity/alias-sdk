const { endpoints } = require('./endpoints')

class PhantomApiHttpClientInMemory {
  postEvents201Response

  postSendEvents201Response

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
