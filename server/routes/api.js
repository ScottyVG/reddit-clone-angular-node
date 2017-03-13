/**
 * MAIN INDEX ROUTE FILE
 */
'use strict';

const posts = require('./posts');
const comments = require('./comments');
const users = require('./users');
const auth = require('./auth');
const express = require('express');
const router = express.Router();

/* ROUTER */
router.use('/posts', posts);
router.use('/comments', comments);
router.use('/users', users);
router.use('/auth', auth);
router.use('/posts/:pid/comments', comments);

module.exports = router;
