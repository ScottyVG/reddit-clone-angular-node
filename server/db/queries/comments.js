/* eslint-disable camelcase */
'use strict';

const knex = require(`../knex`);

/* CREATE */
const createComment = (newComment) => {
  return knex(`comments`).insert(newComment);
};

/* READ */
const readComment = (id) => {
  return knex(`comments`).select(`*`).first().where(`id`, id);
};

/* UPDATE */
const updateComment = (id, changes) => {
  changes.updated_at = new Date();

  return knex(`comments`).where(`id`, id).update(changes);
};

/* DELETE */
const deleteComment = (id) => {
  return knex(`comments`).where(`id`, id).del();
};

/* LIST */
const listComments = () => {
  return knex(`comments`)
  .innerJoin(`users`, `users.id`, `comments.user_id`)
  .select([`comments.id`, `users.name`, `post_id`, `body`])
  .orderBy(`comments.created_at`, `asc`);
};

/* LIST */
const commentsByPost = (pid) => {
  return knex(`comments`)
  .innerJoin(`users`, `users.id`, `comments.user_id`)
  .select([`comments.id`, `users.name`, `post_id`, `body`])
  .where(`post_id`, pid)
  .orderBy(`comments.created_at`, `asc`);
};

module.exports = {
  createComment,
  readComment,
  updateComment,
  deleteComment,
  listComments,
  commentsByPost,
};
