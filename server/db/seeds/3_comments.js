'use strict';

exports.seed = (knex) => {
  return knex(`comments`).del().then(() => {
    return knex(`comments`)
      .insert([{
        user_id: 4,
        post_id: 1,
        body: 'love it',
      }, {
        user_id: 1,
        post_id: 1,
        body: 'Wow dude',
      }, {
        user_id: 2,
        post_id: 2,
        body: 'Scotty is kinda cool.',
      }]);
  });
};
