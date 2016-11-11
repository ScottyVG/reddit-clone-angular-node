'use strict';

exports.up = (knex) => {
  return knex.schema.dropTableIfExists('posts').then(() => {
    return knex.schema.createTable('posts', (table) => {
      table.increments();
      table.integer('user_id').references('users.id').notNullable().onDelete('Cascade');
      table.string('title').notNullable();
      table.text('description').notNullable();
      table.string('image').notNullable();
      table.integer('votes').defaultTo(0);
      table.timestamps(true, true);
    });
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('posts');
};
