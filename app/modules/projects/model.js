const BaseModel = require('../../classes/base_model');

const instanceProps = {
  tableName: 'projects'
};

const classProps = {
  typeName: 'projects',
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
