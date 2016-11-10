'use strict';

const express = require('express');
const router = express.Router({mergeParams: true});
const knex = require('../knex');
const bcrypt = require('bcrypt-as-promised');


function authorizedUser(req, res, next) {
  let loggedInUser = req.session.user;
  let userID = req.params.user_id;

  if (!loggedInUser) {
    res.send('restricted');
  }

  if (loggedInUser.id === parseInt(userID)) {
    next();
  } else {
    res.send('restricted');
  }
}

//show all posts
router.get('/posts', (req, res, next) => {
  res.redirect('/');
});

//show a single post page
router.get('/:post_id', (req, res, next) => {
  let postID = req.params.post_id;
  let userID = req.params.user_id;
  knex('users').where('users.id', userID).innerJoin('posts', 'users.id', 'posts.user_id').first().then((post) => {
    knex('comments').where('comments.post_id', postID).innerJoin('users', 'comments.user_id', 'users.id').then((comments) =>{
      console.log("post", post);
      console.log("comments", comments);
      res.render('single-post', {
        post: post,
        comments: comments
      })
    })
  })
})

//show edit page for a post

router.get('/:post_id/edit', authorizedUser, (req, res, next) => {
  let postID = req.params.post_id;
  let userID = req.params.user_id;
  knex('users').where('users.id', userID).innerJoin('posts', 'users.id', 'posts.user_id').first().then((post) => {
    res.render('edit-post', {
      post: post
    })
  })
})

//create a new post
router.post('/', authorizedUser, (req, res, next) => {
  knex('posts').insert({
    title: req.body.title,
    body: req.body.body,
    user_id: req.session.user.id
  }).then((post) => {
    res.redirect('/posts');
  })
})

//add a comment to a post
router.post('/:post_id/comments', authorizedUser, (req, res, next)=>{
  let postID = req.params.post_id;
  knex('comments').insert({
    content: req.body.content,
    user_id: req.session.user.id,
    post_id: postID
  }).then((comment)=>{
    res.redirect('/posts/' + postID)
  })
})


//edit a posts
router.patch('/:post_id/', (req, res, next) => {
  let postID = req.params.post_id;
  let userID = req.params.user_id;
  knex('posts').where('posts.id', postID).update({
    body: req.body.body,
    title: req.body.title
  }).then(() =>{
    res.redirect('/users/' + userID + '/posts/' + postID);
  })
});


//delete a post
router.delete(':post_id/', authorizedUser, (req, res, next) => {
  let postID = req.params.post_id;
  let userID = req.params.user_id;
  knex('posts').where('posts.id', postID).del().then(() =>{
    res.redirect('/users/' + userID);
  })
});



module.exports = router;
