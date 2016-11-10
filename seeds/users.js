exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('users').del(),

    // TODO: crypt the password
    knex('users').insert({
      email: 'user1@example.com',
      name: "Dwayne Johnson",
      password_hash: "password"
    })
  );
};
