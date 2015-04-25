//migrations.fantasy.js
exports.up = function (knex) {
  return knex.schema.
    createTable('projects', function (t) {
      t.increments('id');
      t.text('name').notNullable().unique();
      t.text('role');
      t.text('description');
      t.text('url').notNullable();
    }).
    createTable('presentations', function (t) {
      t.increments('id');
      t.text('title').notNullable();
      t.text('url').notNullable();
      t.text('venue').notNullable();
      t.date('date').notNullable();
      t.text('abstract')
    }).
    createTable('community', function (t) {
      t.increments('id');
      t.text('name').notNullable();
      t.text('role');
      t.text('url');
      t.text('description');  
      t.date('date').notNullable();
    }).
    createTable('writing', function (t) {
      t.increments('id');
      t.text('title').notNullable();
      t.text('summary');
      t.text('url').notNullable();
    })
  };

exports.down = function (knex) {
  return knex.schema.
    dropTable('projects').
    dropTable('presentations').
    dropTable('community').
    dropTable('writing');
};
