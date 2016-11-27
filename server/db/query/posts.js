/**
 * QUERY DB POSTS
 */
'use strict';

const knex = require('../knex');

/* Create */
const createPost = (newPost) => {
  return knex('posts').insert(newPost);
};

/* Read */
const readPost = (id) => {
  return knex('posts')
    .innerJoin('users', 'users.id', 'posts.user_id')
    .select(['posts.id', 'users.name', 'title',
      'description', 'image', 'votes', 'posts.updated_at'
    ])
    .first().where('posts.id', id);
};

/* Update */
const updatePost = (id, changes) => {
  changes.updated_at = new Date();

  return knex('posts').where('id', id).update(changes);
};

/* Delete */
const deletePost = (id) => {
  return knex('posts').where('id', id).del();
};

/* Lists */
const listPosts = () => {
  return knex('posts')
    .innerJoin('users', 'users.id', 'posts.user_id')
    .select(['posts.id', 'users.name', 'title',
      'description', 'image', 'votes', 'posts.updated_at'
    ])
    .orderBy('posts.created_at', 'asc');
};

module.exports = {
  createPost,
  readPost,
  updatePost,
  deletePost,
  listPosts,
};
