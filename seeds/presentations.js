'use strict';

exports.seed = function(knex, Promise) {
    return Promise.join(
        // Deletes ALL existing entries
        knex('presentations').del(), 

        // Inserts seed entries
        knex('presentations').insert({
          id: 1,
          user_id: 1,
          title: 'How to Train Your Programmer',
          url: 'https://github.com/ashleygwilliams/how-to-train-your-programmer/tree/UvA-summer2014',
          venue: 'University of Amsterdam: Coding the Humanities Seminar',
          date: 'Summer 2014'
        }),
        knex('presentations').insert({
          id: 2, 
          user_id: 1,
          title: 'How to Train Your Programmer',
          url: 'https://github.com/ashleygwilliams/how-to-train-your-programmer/tree/BostonJS-summer2014',
          venue: 'BostonJS',
          date: 'Summer 2014'
        }),
        knex('presentations').insert({
          id: 3,
          user_id: 1,
          title: 'How to Train Your Programmer',
          url: 'https://github.com/ashleygwilliams/how-to-train-your-programmer/tree/MIT-fall2014',
          venue: 'MIT Media Lab: Social Computing Group',
          date: 'Fall 2014'
        }),
        knex('presentations').insert({
          id: 4,
          user_id: 1,
          title: 'If you wish to learn ES/2015 from scratch, you must first invent the universe',
          url: 'http://2015.jsconf.us/speakers.html',
          venue: 'JSConf',
          date: '[UPCOMING] Summer 2015'
        }),
        knex('presentations').insert({
          id: 5,
          user_id: 1,
          title: 'If you wish to learn ES/2015 from scratch, you must first invent the universe',
          url: 'http://2015.cascadiajs.com/browser/',
          venue: 'CascadiaFest: Browser Day',
          date: '[UPCOMING] Summer 2015'
        }),
        knex('presentations').insert({
          id: 6,
          user_id: 1,
          title: 'Hackathon Yackathon: Conversations on hacking as civic engagement',
          url: 'http://www.meetup.com/OccupyData/events/113257952/',
          venue: 'OccupyData NYC Meetup',
          date: 'Spring 2013'
        })
    );
};
