/**
 * POSTS ROUTE FILE
 */
'use strict';

const db = require('../db/query/posts');
const express = require('express');
const router = express.Router();

// Create
router.post('/', (req, res, next) => {
  const newPost = req.body;
  db.createPost(newPost)
    .then(() => res.sendStatus(200))
    .catch((err) => next(err));
});

// Read
router.get('/:pid', (req, res, next) => {
  const id = req.params.pid;
  db.readPost(id)
    .first()
    .then((post) => res.json(post))
    .catch((err) => next(err));
});

// Update
router.put('/:pid', (req, res, next) => {
  const id = req.params.pid;
  const changes = req.body;

  db.updatePost(id, changes)
    .then(() => res.sendStatus(200))
    .catch((err) => next(err));
});

// Delete
router.delete('/:pid', (req, res, next) => {
  const id = req.params.pid;
  db.deletePost(id)
    .then(() => res.sendStatus(200))
    .catch((err) => next(err));
});

// List
router.get('/', (req, res, next) => {
  db.listPosts()
    .then((posts) => res.json(posts))
    .catch((err) => next(err));
});

module.exports = router;
