const axios = require('axios')
const { phantomRepository } = require('./phantomRepository')

const phantomRepositoryAxios = phantomRepository(axios)
module.exports = { phantomRepositoryAxios }
