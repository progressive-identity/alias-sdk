const phantomApiURL = 'READ THIS URL FROM THE CONFIG FILE'

function phantomRepository({ phantomHttpClient }) {
  return {
    sendEvent: () => {
      phantomHttpClient.post(`${phantomApiURL}/events`, { data: 'dataobject' })
    },
    getAliasByAppIdentifier: () => {
      phantomHttpClient.get(`${phantomApiURL}/alias`, { data: 'dataobject' })
    },
    recordEvent: () => {
      phantomHttpClient.post(`${phantomApiURL}/events`, { data: 'dataobject' })
    },
    createAlias: () => {
      phantomHttpClient.post(`${phantomApiURL}/aliases`, { data: 'dataobject' })
    },
  }
}

module.exports = { phantomRepository }
