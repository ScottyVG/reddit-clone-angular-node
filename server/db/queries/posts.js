/* eslint-disable camelcase */
'use strict';

const knex = require(`../knex`);

/* CREATE */
const createPost = (newPost) => {
  return knex(`posts`).insert(newPost);
};

/* READ */
const readPost = (id) => {
  return knex(`posts`)
  .innerJoin(`users`, `users.id`, `posts.user_id`)
  .select([`posts.id`, `users.name`, `title`,
    `description`, `image`, `votes`, `posts.updated_at`])
  .first().where(`posts.id`, id);
};

/* UPDATE */
const updatePost = (id, changes) => {
  changes.updated_at = new Date();

  return knex(`posts`).where(`id`, id).update(changes);
};

/* DELETE */
const deletePost = (id) => {
  return knex(`posts`).where(`id`, id).del();
};

/* LIST */
const listPosts = () => {
  return knex(`posts`)
  .innerJoin(`users`, `users.id`, `posts.user_id`)
  .select([`posts.id`, `users.name`, `title`,
    `description`, `image`, `votes`, `posts.updated_at`])
  .orderBy(`posts.created_at`, `asc`);
};

module.exports = {
  createPost,
  readPost,
  updatePost,
  deletePost,
  listPosts,
};
