const { eventsApiClient } = require('../eventsApiAxios')

async function tempEvent() {
  console.log('tempEvent')
  const temp = {
    data: {
      eventTypeName: 'user_log_in',
      triggerType: 'countdown',
      countdown: {
        hours: 0,
        days: 0,
        weeks: 0,
        months: 0,
        years: 0,
      },
      description: 'Un utilisateur se connecte sur notre site',
      creative: 'creates data',
      family: 'misc',
    },
  }
  const response = await eventsApiClient.post('event-types', temp)
  console.log(response)
}

module.exports = { tempEvent }
