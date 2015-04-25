'use strict';

exports.seed = function(knex, Promise) {
    return Promise.join(
        // Deletes ALL existing entries
        knex('projects').del(), 

        // Inserts seed entries
        knex('projects').insert({
          id: 1,
          user_id: 1,
          name: 'endpoints',
          role: 'architecture and documentation',
          url: 'http://www.github.com/endpoints',
          description: 'a hypermedia API framework for javascript'
        }),
        knex('projects').insert({
          id: 2, 
          user_id: 1,
          name: 'js-assessment',
          role: 'co-maintainer',
          url: 'http://www.github.com/rmurphey/js-assessment',
          description: 'a test-driven approach to testing JS skills'
        })
    );
};
