'use strict';

exports.seed = function(knex, Promise) {
    return Promise.join(
        // Deletes ALL existing entries
        knex('community').del(), 

        // Inserts seed entries
        knex('community').insert({
          id: 1,
          user_id: 1,
          name: 'BostonJS',
          role: 'co-organizer',
          url: 'http://www.meetup.com/boston_JS/',
          description: 'the Boston local user group for JavaScript developers',
          start: 'summer 2014'
        }),
        knex('community').insert({
          id: 2, 
          user_id: 1,
          name: 'Papers We Love BOS',
          role: 'organizer',
          url: 'https://twitter.com/paperswelovebos',
          description: 'Papers We Love, Boston edition. a reading group for technical papers',
          start: 'fall 2014',
          end: 'winter 2015'
        }),
        knex('community').insert({
          id: 3,
          user_id: 1,
          name: 'Science Club for Girls: Young Leaders in STEM Summer Program',
          role: 'co-instructor and curriculum developer',
          url: 'http://scienceclubforgirls.org/teen-programs-overview',
          description: 'developed and taught a seminar on Code and Art, including a Processing intro and analog algorithm exercises',
          start: 'summer 2014'
        }),
        knex('community').insert({
          id: 4,
          user_id: 1,
          name: 'Young Rewired State: Festival of Code',
          role: 'technical mentor and judge',
          url: 'http://www.yrs.io/',
          description: 'travelled across UK giving git/Github seminars, served as 1 of 4 judges at final festival',
          start: 'summer 2013'
        }),
        knex('community').insert({
          id: 5,
          user_id: 1,
          name: 'BetaNYC',
          role: 'co-organizer and technical director',
          url: 'http://www.meetup.com/betanyc/',
          description: 'the NYC Code for America brigade; organized meetups and oversaw technical development and decision making',
          start: 'summer 2012',
          end: 'spring 2013'
        })
    );
};
