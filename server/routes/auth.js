/*jshint esversion:6*/

'use strict';


const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt-as-promised');
const users_app = require('../modules/users_app');


//
router.get('/signup', (req,res)=>{
  res.render('pages/signup', {
  });
});

router.get('/login', (req,res)=>{
  res.render('pages/login');

});


router.get('/signup', (req,res)=>{
    res.render('pages/signup');
});


router.post('/signup', (req, res, next) => {
  console.log(req.body);
  let newUser = {
    username: req.body.username,
    email: req.body.email
  };

  bcrypt.hash(req.body.password, 10)
    .then((hash) => {
      newUser.password = hash;
      users_app.users.set.new(newUser)
        .then((row) => {
          console.log('user_row',row);

          res.locals.loggedIn=true;
          res.locals.userId=row[0].id;
          res.locals.username=row[0].username;
          res.locals.email=row[0].email;
          res.locals.isAdmin=row[0].admin;

          req.session.user = row[0];
          req.session.loggedIn=true;
          req.session.userId=row[0].id;
          req.session.username=row[0].username;
          req.session.email=row[0].email;
          req.session.isAdmin=row[0].admin;


          console.log('session', req.session);
          console.log('locals', res.locals);
          res.redirect('/');
        });
    });
});

//GET login page
router.get('/login', (req, res, next) => {
        res.render('pages/login', {
            loginMessage : "",
        });
    });

//authenticate and begin tracking session
router.post('/login', (req, res, next) => {
    knex('users')
    .where('username', req.body.username)
    .first()
    .then((user) => {

        if(!user) {
            return res.render('pages/login', {
                loginMessage : "invalid login info",
            });
        }

        bcrypt.compare(req.body.password, user.password)
          .then(function () {
            console.log('worked');
            req.session.user = user;
            res.cookie('loggedIn', true);
            res.redirect('/');
          }, function () {
            console.log('failed');
            res.redirect('back');
          });
    });
});

//logout
router.get('/logout', (req, res) => {
    req.session = null;
    //redirect to the landing page
    res.redirect('/');
});

module.exports = router;
