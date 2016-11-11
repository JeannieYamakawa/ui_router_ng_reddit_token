
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      knex.raw('ALTER SEQUENCE users_id_seq RESTART WITH 1').then();
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({username: 'Person1', password: 'password1', email: 'person1@mail.com'}),
        knex('users').insert({username: 'Person2', password: 'password2', email: 'person2@mail.com' }),
        knex('users').insert({username: 'Person3', password: 'password3', email: 'person3@mail.com' })
      ]);
    });
};
