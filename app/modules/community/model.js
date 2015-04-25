const BaseModel = require('../../classes/base_model');

const instanceProps = {
  tableName: 'community'
};

const classProps = {
  typeName: 'community',
  filters: {
    id: function (qb, value) {
      return qb.whereIn('id', value);
    },
    name: function (qb, value) {
      return qb.whereIn('name', value);
    }
  }
};

module.exports = BaseModel.extend(instanceProps, classProps);
