const axios = require('axios')
const { eventsRepository } = require('./eventsRepository')

const eventsRepositoryAxios = eventsRepository(axios)
module.exports = { eventsRepositoryAxios }
