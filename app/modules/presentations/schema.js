module.exports = {
  body: {
    properties: {
      id: {
        type: 'integer'
      },
      user_id: {
        type: 'integer'
      },
      title: {
        type: 'string'
      },
      venue: {
        type: 'string'
      },
      date: {
        type: 'string',
        format: 'date-time'
      },
      abstract: {
        type: 'string'
      },
      url: {
        type: 'string'
      }
    }
  }
};
