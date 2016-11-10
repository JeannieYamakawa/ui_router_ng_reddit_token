'use strict';

const express = require('express');
const router = express.Router({
  mergeParams: true
});
const knex = require('../knex');

// // router.get('/posts/:id/comments/new', function(req, res) {
// //   var userID = req.params.id;
// //   res.render("comments/new", {
// //     userID: userID
// //   });
// // });
//
// router.post('/posts/:id/comments/new', function(req, res) {
//   var userID = req.params.id;
//   var cookieUserID = Number.parseInt(req.session.user.id);
//   knex('comments').insert({
//     content: req.body.content,
//     post_id: knex.select('id').from('posts').where('id', userID),
//     user_id: knex.select('id').from('users').where('id', cookieUserID)
//   }).then(function(users) {
//     res.redirect('/posts');
//   }).catch(function(err) {
//     console.log(err);
//   });
// });

router.get('/comments/:comments_id', function(req, res) {
  res.redirect('/posts');
});

router.get('/comments/:comments_id/edit', function(req, res) {
  knex('comments').where({
    id: req.params.id
  }).first().then(function(comment) {
    res.render('comments/edit', {
      comment: comment
    });
  }).catch(function(err) {
    console.log(err);
  });
});

router.patch('/comments/:comments_id', function(req, res) {
  knex('comments').where({
    id: req.params.id
  }).update({
    content: req.body.content
  }).then(function(comment) {
    res.redirect('/posts/' + comment.post_id);
  }).catch(function(err) {
    console.log(err);
  });
});

router.delete('/comments/:comments_id', function(req, res) {
  knex('comments').where({
    id: req.params.id
  }).del().then(function(comment) {
    res.redirect('/posts/' + comment.post_id);
  }).catch(function(err) {
    console.log(err);
  });
});

module.exports = router;
