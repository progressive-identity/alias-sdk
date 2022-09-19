const Alias = require('./index')

const alias = new Alias()

alias.triggerEvent({
  createsAlias: 'yes',
  eventTypeId: 41,
  processingRecordId: 37,
  purposeId: 67,
  returnInstructions: 'send',
  /*   appIdentifier: {
      name: 'member-mailchimp-id',
      value: 'ds1-ds123-23d',
    }, */
})
