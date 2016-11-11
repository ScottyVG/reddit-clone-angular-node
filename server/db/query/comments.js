/**
 * QUERY COMMENTS
 */
'use strict';

const knex = require('../knex');

// Create
const createComment = (newComment) => {
  return knex('comments').insert(newComment);
};

// Read
const readComment = (id) => {
  return knex('comments').select('*').first().where('id', id);
};

// Update
const updateComment = (id, changes) => {
  changes.updated_at = new Date();

  return knex('comments').where('id', id).update(changes);
};

// Delete
const deleteComment = (id) => {
  return knex('comments').where('id', id).del();
};

// List
const listComments = () => {
  return knex('comments')
    .innerJoin('users', 'users.id', 'comments.user_id')
    .select(['comments.id', 'users.name', 'post_id', 'body'])
    .orderBy('comments.created_at', 'asc');
};

const commentsByPost = (pid) => {
  return knex('comments')
    .innerJoin('users', 'users.id', 'comments.user_id')
    .select(['comments.id', 'users.name', 'post_id', 'body'])
    .where('post_id', pid)
    .orderBy('comments.created_at', 'asc');
};

module.exports = {
  createComment,
  readComment,
  updateComment,
  deleteComment,
  listComments,
  commentsByPost,
};
