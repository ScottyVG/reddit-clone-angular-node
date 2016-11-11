/**
 * COMMENTS ROUTE FILE
 */
'use strict';

const db = require('../db/query/comments');
const express = require('express');
const router = express.Router({
  mergeParams: true
});

// Create
router.post('/', (req, res, next) => {
  const newComment = req.body;
  db.createComment(newComment)
    .then(() => res.sendStatus(200))
    .catch((err) => next(err));
});

// Read
router.get('/:cid', (req, res, next) => {
  const id = req.params.cid;
  db.readComment(id)
    .first()
    .then((comment) => res.json(comment))
    .catch((err) => next(err));
});

// Update
router.put('/:cid', (req, res, next) => {
  const id = req.params.cid;
  const changes = req.body;

  db.updateComment(id, changes)
    .then(() => res.sendStatus(200))
    .catch((err) => next(err));
});

// Delete
router.delete('/:cid', (req, res, next) => {
  const id = req.params.cid;
  db.deleteComment(id)
    .then(() => res.sendStatus(200))
    .catch((err) => next(err));
});

// List
router.get('/', (req, res, next) => {
  const pid = req.params.pid;
  if (pid) {
    db.commentsByPost(pid)
      .then((comments) => res.json(comments))
      .catch((err) => next(err));
  } else {
    db.listComments()
      .then((comments) => res.json(comments))
      .catch((err) => next(err));
  }
});

module.exports = router;
