'use strict';

exports.seed = function(knex, Promise) {
    return Promise.join(
        // Deletes ALL existing entries
        knex('users').del(), 

        // Inserts seed entries
        knex('users').insert({
          id: 1,
          name: 'ashley g. williams',
          title: 'engineer/educator',
          github: 'https://www.github.com/ashleygwilliams',
          twitter: 'http://www.twitter.com/ag_dubs'
        })
    );
};
