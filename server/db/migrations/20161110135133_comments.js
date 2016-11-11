'use strict';

exports.up = (knex) => {
  return knex.schema.dropTableIfExists('comments').then(() => {
    return knex.schema.createTable('comments', (table) => {
      table.increments();
      table.integer('user_id').references('users.id').notNullable().onDelete('Cascade');
      table.integer('post_id').references('posts.id').notNullable().onDelete('Cascade');
      table.string('body').notNullable();
      table.timestamps(true, true);
    });
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('comments');
};
