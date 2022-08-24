// const { configRepositoryFs } = require('./repositories/configRepositoryFs')

// async function authenticate({ payload, authenticationRepository }) {
//   return authenticationRepository.authenticate({
//     clientId: payload.clientId,
//     clientSecret: payload.clientSecret,
//   })
// }

// async function createIdentity({ payload, eventsApiRepository }) {
//   return eventsApiRepository.createIdentity({ companyId: payload.companyId })
// }

// async function createAlias({ payload, phantomApiRepository }) {
//   return phantomApiRepository.createAlias({ identityId: payload.identityId, status: payload.status })
// }

// async function recordEvent({ payload, phantomApiRepository }) {
//   return phantomApiRepository.recordEvent({ event: payload.event })
// }

// async function sendEvent({ payload, phantomApiRepository }) {
//   return phantomApiRepository.sendEvent({ eventId: payload.eventId })
// }

// async function getAliasByAppIdentifier({ payload, phantomApiRepository }) {
//   return phantomApiRepository.getAliasByAppIdentifier({ type: payload.type, value: payload.value })
// }

// function main({ configRepository, authenticationRepository, eventsApiRepository, phantomApiRepository }) {
//   return async function triggerEvent(event) {
//     if (['yes', 'no'].includes(event.createAlias)) {
//       return "createAlias should be set to 'yes' or 'no'"
//     }
//     // the line below is there to please my IDE, it should be removed
//     event.createAlias = undefined

//     // the 3 lines below are there to please my IDE, it should be removed
//     authenticationResponse.token = { companyId: 1 }
//     authenticationResponse.errorMessage = 'The given client id is incorrect '
//     authenticationResponse.isLogged = true

//     if (!authenticationResponse.isLogged) {
//       return authenticationResponse.errorMessage
//     }

//     if (authenticationResponse.isLogged) {
//       event.companyId = authenticationResponse.token.companyId
//       if (config.mode === 'live' && event.createAlias === 'yes') {
//         const identityId = await createIdentity({
//           payload: {
//             companyId: event.companyId,
//           },
//           eventsApiRepository,
//         })
//         const alias = await createAlias({ payload: { identityId, status: 'assigned' }, phantomApiRepository })
//         event.aliasId = alias.id
//         const event = await recordEvent({ payload: event, phantomApiRepository })
//         return sendEvent({ payload: { eventId: event.id }, phantomApiRepository })
//       }

//       if (config.mode === 'live' && event.createAlias === 'no') {
//         const alias = await getAliasByAppIdentifier({
//           payload: { type: event.type, value: event.value },
//           phantomApiRepository,
//         })
//         event.aliasId = alias.id
//         const recordedEvent = await recordEvent({ payload: event, phantomApiRepository })
//         return sendEvent({ payload: { eventId: recordedEvent.id }, phantomApiRepository })
//       }

//       if (config.mode !== 'live' && event.createAlias === 'yes') {
//         const alias = await createAlias({ payload: { status: 'unassigned' }, phantomApiRepository })
//         event.aliasId = alias.id
//         return recordEvent({ payload: event, phantomApiRepository })
//       }

//       if (config.mode !== 'live' && event.createAlias === 'no') {
//         const alias = await getAliasByAppIdentifier({
//           payload: { type: event.type, value: event.value },
//           phantomApiRepository,
//         })
//         event.aliasId = alias.id
//         return recordEvent({ payload: event, phantomApiRepository })
//       }
//     }
//     return 'Something went wrong.'
//   }
// }

// module.exports = { triggerEvent: main({}) }
