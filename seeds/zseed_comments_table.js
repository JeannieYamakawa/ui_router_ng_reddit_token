
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      knex.raw('ALTER SEQUENCE comments_id_seq RESTART WITH 1').then();
      return Promise.all([
        // Inserts seed entries
        knex('comments').insert({content: 'Booyah', post_id: 2, user_id: 1}),
        knex('comments').insert({content: 'No way', post_id: 1, user_id: 1}),
        knex('comments').insert({content: 'Leave me alone', post_id: 3, user_id: 2}),
        knex('comments').insert({content: 'Woo woo woo', post_id: 3, user_id: 3 }),
        knex('comments').insert({content: 'Yahoo', post_id: 1, user_id: 3})
      ]);
    });
};
