const { endpoints } = require('./endpoints')

class EventsApiHttpClientInMemory {
  postIdentities201Response = {
    code: 201,
    data: {
      ids: [1],
    },
  }

  async post({ endpoint }) {
    const responseByEndpoint = { [endpoints.identities]: this.postIdentities201Response }
    return responseByEndpoint[endpoint]
  }
}

module.exports = { EventsApiHttpClientInMemory }
