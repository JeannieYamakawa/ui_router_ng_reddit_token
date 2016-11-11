exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('comments', function(table) {
    table.increments();
    table.string('content');
    table.integer('user_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');
    table.integer('post_id')
      .unsigned()
      .index()
      .references('id')
      .inTable('posts')
      .onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('comments');
};
