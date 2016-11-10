'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');
const bcrypt = require('bcrypt-as-promised');
const users_app = require('../modules/users_app');



//displays a page of all users
router.get('/users', (req, res, next) => {
      res.redirect('/');
});


//displays all posts by a specific user
router.get('/users/:user_id', (req, res) => {
    var userId = req.params.user_id;
    var thisUsersPosts;
    var thisUsersComments;
    var userName;
    let session = req.session;
    console.log(session, 'this is req.session');
    knex('users').where('id',userId).then(function(data){
        userName = data[0].username;
        knex('posts').where('user_id', userId).then(function(data1){
          thisUsersPosts = data1;
          knex('comments').where('user_id', userId).then(function(data2){
            thisUsersComments = data2;
            res.render('./user-posts', {userId: userId,thisUsersPosts: thisUsersPosts, thisUsersComments:thisUsersComments, userName: userName, session: session})
          });
        });
    });
});


// GET /users/:user/edit
//page with form for editing user information
router.get('/users/:user_id/edit',function(req,res){
    var userBeingEdited = req.params.user_id;
    var wholeUser = req.session.user;
    var userLoggedIn = req.session.user.id;
    if (userBeingEdited == userLoggedIn){
        res.render('./user-edit', {wholeUser:wholeUser})
    } else{
    res.sendStatus(401);
    }
});

// PATCH /users/:user         action for edit user info form
router.patch('/users/:user_id', function(req,res){
    var userParam = req.params.user_id;
    var passwordToChange = req.body.password;
    var emailToChange = req.body.email;
        if(userParam == req.session.user.id){
            bcrypt.hash(req.body.password, 10)
              .then(function (hash){
            knex('users').where('id', req.session.user.id).update({
                username: req.body.username,
                password: hash,
                email: req.body.email
            }).then(
                function(){
                    res.redirect('/users/'+ userParam)
                }
            )
        })
    }else{
            res.sendStatus(401);
        }
})

// GET /users/:user/delete     page with confirm button to delete individual user
router.get('/users/:user_id/delete', function(req,res){
        let session = req.session;
        res.render('./user-deleteConfirm', {session:session})
})



// DELETE /users/:user     delete current user
router.delete('/users/:user_id', function(req,res){
    var userParams = parseInt(req.params.user_id);
    var userToDelete = req.session.user.id;
    if(userParams===userToDelete){
        console.log("same");
        knex('users').where('id', userToDelete).del()
        .then(function(){
            res.redirect('/')
        })
    }
    else{
        console.log("not same");
        res.sendStatus(401)
    }
})



module.exports = router;
