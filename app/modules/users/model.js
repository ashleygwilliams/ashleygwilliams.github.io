const BaseModel = require('../../classes/base_model');

const instanceProps = {
  tableName: 'users',
  projects: function () {
    return this.hasMany(require('../projects/model'));
  },
  presentations: function () {
    return this.hasMany(require('../presentations/model'));
  },
  community: function () {
    return this.hasMany(require('../community/model'));
  },
  writing: function () {
    return this.hasMany(require('../writing/model'));
  }
};

const classProps = {
  typeName: 'users',
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
