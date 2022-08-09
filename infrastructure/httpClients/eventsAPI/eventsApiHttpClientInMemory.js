const { endpoints } = require('./endpoints')

class EventsApiHttpClientInMemory {
  postIdentities201Response

  async post({ endpoint }) {
    const responseByEndpoint = { [endpoints.identities]: this.postIdentities201Response }
    return responseByEndpoint[endpoint]
  }

  feedIdentityResponse(postIdentities201Response) {
    this.postIdentities201Response = postIdentities201Response
  }
}

module.exports = { EventsApiHttpClientInMemory }
