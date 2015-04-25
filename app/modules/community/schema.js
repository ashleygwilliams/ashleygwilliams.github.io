module.exports = {
  body: {
    properties: {
      id: {
        type: 'integer'
      },
      name: {
        type: 'string'
      },
      role: {
        type: 'string'
      },
      description: {
        type: 'string'
      },
      date: {
        type: 'string',
        format: 'date-time'
      },
      url: {
        type: 'string'
      }
    }
  }
};
