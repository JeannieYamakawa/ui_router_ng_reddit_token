'use strict';


 const express = require('express');
 const router = express.Router();
 var knex = require('../knex');
 var bcrypt = require('bcrypt-as-promised');

router.post('/post/upvote', (req, res, next) => {
  console.log(req.body);
  knex('votes_posts').insert({
    user_id: req.session.user.id,
    post_id: req.body.postID,
    upvote: true
  }).then(() => {
    next();
  })
})

router.post('/post/downvote', (req, res, next) => {
  console.log(req.body);
  knex('votes_posts').insert({
    user_id: req.session.user.id,
    post_id: req.body.postID,
    downvote: true
  }).then(() => {
    next();
  })
})

router.post('/comment/upvote', (req, res, next) => {
  console.log(req.body);
  knex('votes_comment').insert({
    user_id: req.session.user.id,
    post_id: req.body.commentID,
    upvote: true
  }).then(() => {
    next();
  })
})

router.post('/comment/downvote', (req, res, next) => {
  console.log(req.body);
  knex('votes_comments').insert({
    user_id: req.session.user.id,
    post_id: req.body.commentID,
    downvote: true
  }).then(() => {
    next();
  })
})


 module.exports = router;
