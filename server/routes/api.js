/**
 * MAIN INDEX ROUTE FILE
 */
'use strict';

const posts = require('./posts.js');
const comments = require('./comments.js');
const users = require('./users.js');
const auth = require('./auth.js');
const express = require('express');
const router = express.Router();

/* ROUTER */
router.use('/posts', posts);
router.use('/comments', comments);
router.use('/users', users);
router.use('/auth', auth);
router.use('/posts/:pid/comments', comments);

module.exports = router;
