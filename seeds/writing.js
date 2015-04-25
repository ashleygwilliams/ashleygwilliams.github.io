'use strict';

exports.seed = function(knex, Promise) {
    return Promise.join(
        // Deletes ALL existing entries
        knex('writing').del(), 

        // Inserts seed entries
        knex('writing').insert({
          id: 1,
          user_id: 1,
          title: 'No True Conference Organizers',
          url: 'https://medium.com/@ag_dubs/no-true-conference-organizer-dd0ff11294a',
          summary: 'a response to Jared Spool\'s post "Code of Conducts[sic]: Considered Harmful"'
        })
    );
};
