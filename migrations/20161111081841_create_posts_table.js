exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('posts', function(table) {
    table.increments();
    table.string('title')
      .notNullable()
      .defaultTo('');
    table.integer('user_id')
        .unsigned()
        .index()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE');
    table.string('image')
          .notNullable()
          .defaultTo('');
    table.string('description')
      .notNullable()
      .defaultTo('');
    table.integer('num_votes')
        .unsigned()
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('posts');
};
