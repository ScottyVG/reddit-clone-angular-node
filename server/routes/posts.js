'use strict';

const db = require(`../db/queries/posts.js`);
const express = require(`express`);
const router = express.Router();

/* CREATE */
router.post(`/`, (req, res, next) => {
  const newPost = req.body;
  db.createPost(newPost)
  .then(() => res.sendStatus(200))
  .catch((err) => next(err));
});

/* READ */
router.get(`/:pid`, (req, res, next) => {
  const id = req.params.pid;
  db.readPost(id)
  .first()
  .then((post) => res.json(post))
  .catch((err) => next(err));
});

/* UPDATE */
router.put(`/:pid`, (req, res, next) => {
  const id = req.params.pid;
  const changes = req.body;

  db.updatePost(id, changes)
  .then(() => res.sendStatus(200))
  .catch((err) => next(err));
});

/* DELETE */
router.delete(`/:pid`, (req, res, next) => {
  const id = req.params.pid;
  db.deletePost(id)
  .then(() => res.sendStatus(200))
  .catch((err) => next(err));
});

/* LIST */
router.get(`/`, (req, res, next) => {
  db.listPosts()
  .then((posts) => res.json(posts))
  .catch((err) => next(err));
});

module.exports = router;
