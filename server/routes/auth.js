'use strict';

const db = require(`../db/queries/users`);
const bcrypt = require(`bcrypt`);
const express = require(`express`); /* eslint-disable new-cap */
const router = express.Router();    /* eslint-enable new-cap */

/* JOIN */
router.post(`/new`, (req, res, next) => {
  const newUser = req.body;
  newUser.hash_pw = bcrypt.hashSync(newUser.password, 12);
  delete newUser.password;

  db.createUser(newUser)
  .then((user) => {
    const newb = user[0];
    delete newb.hash_pw;
    delete newb.created_at;
    delete newb.updated_at;
    req.session.user = newb;
    res.sendStatus(200);
  })
  .catch((err) => {
    res.sendStatus(400);
  });
});

/* LOGIN */
router.post(`/`, (req, res, next) => {
  const user = req.body;
  db.listUsers()
  .then((users) => {
    const stored = users.find((el) => el.email === user.email);
    if (stored && bcrypt.compareSync(user.password, stored.hash_pw)) {
      delete stored.hash_pw;
      delete stored.created_at;
      delete stored.updated_at;
      req.session.user = stored;
      res.sendStatus(200);
    }
    else {
      res.sendStatus(400);
    }
  })
  .catch((err) => next(err));
});

/* LOGOUT */
router.delete(`/`, (req, res, next) => {
  req.session = null;
  res.sendStatus(200);
});

module.exports = router;
