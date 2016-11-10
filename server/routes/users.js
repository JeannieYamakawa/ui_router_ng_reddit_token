'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex.js');
const bcrypt = require('bcrypt-as-promised');



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
