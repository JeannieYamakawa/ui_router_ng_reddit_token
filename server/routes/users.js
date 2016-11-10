'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex.js');
const bcrypt = require('bcrypt-as-promised');
const jwt = require('jsonwebtoken');



router.get('/verify', function (req, res, next) {
  if (req.headers.authorization) {
    const token = req.headers.authorization.split(' ')[1];

    // IF it was expired - verify would actually throw an exception
    // we'd have to catch in a try/catch
    const payload = jwt.verify(token, process.env.JWT_SECRET);

    // payload is {id: 56}
    knex('users').where({id: payload.id}).first().then(function (user) {
      if (user) {
        res.json({id: user.id, name: user.name})
      } else {
        res.status(403).json({
          error: "Invalid ID"
        })
      }
    })
  } else {
    res.status(403).json({
      error: "No token"
    })
  }
})



//displays a page of all users
router.get('/users', (req, res, next) => {
      res.redirect('/');
});


//displays all posts by a specific user
router.get('/users/:user_id', (req, res) => {

});


// GET /users/:user/edit
//page with form for editing user information
router.get('/users/:user_id/edit',function(req,res){

});

// PATCH /users/:user         action for edit user info form
router.patch('/users/:user_id', function(req,res){

})

// GET /users/:user/delete     page with confirm button to delete individual user
router.get('/users/:user_id/delete', function(req,res){

})



// DELETE /users/:user     delete current user
router.delete('/users/:user_id', function(req,res){

})



module.exports = router;
