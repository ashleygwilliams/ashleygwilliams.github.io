const BaseModel = require('../../classes/base_model');

const instanceProps = {
  tableName: 'writing'
};

const classProps = {
  typeName: 'writing',
  filters: {
    id: function (qb, value) {
      return qb.whereIn('id', value);
    },
    title: function (qb, value) {
      return qb.whereIn('title', value);
    }
  }
};

module.exports = BaseModel.extend(instanceProps, classProps);
