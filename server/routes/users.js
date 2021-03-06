'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');





router.post('/signup', function(req,res,next){
    let errors = [];
    if (!req.body.email) {errors.push("Email can't be blank")};
    if (!req.body.username) {errors.push("Name can't be blank")};
    if (!req.body.password) {errors.push("Password can't be blank")};
    if ($window.localStorage.getItem('token')){
        console.log($window.localStorage.getItem('token'), '$window.localStorage.getItem(token)');
    }
      if (errors.length) {
          console.log(errors);
        res.status(422).json({
          errors: errors
        })
      }else {
          knex('users')
            .where('email', req.body.email)
            .count()
            .first()
            .then(function (result) {
               if (result.count === "0") {
                 const saltRounds = 4;
                 const passwordHash = bcrypt.hashSync(req.body.password, saltRounds);
                 knex('users')
                  .insert({
                    email: req.body.email,
                    username: req.body.username,
                    password: passwordHash
                    })
                  .returning('*')
                  .then(function (users) {
                    const user = users[0];
                    const token = jwt.sign({ id: user.id }, 'process.env.JWT_SECRET');
                    console.log(token, 'token');
                    res.json({id: user.id, email: user.email, username: user.username, token: token})
                  })
               } else {
                res.status(422).json({
                  errors: ["Email has already been taken"]
                })
              }
            })
        }
});



router.get('/verify', function(req,res,next){
    if(req.headers.authorization){
        //grab everything before the 'Bearer' in the resolve function inside of ui-router's config
        const token = req.headers.authorization.split(' ')[1];
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        // payload is {id: 56}
        knex('users').where({id: payload.id}).first().then(function (user) {
          if (user) {
            res.json({id: user.id, username: user.username})
          } else {
            res.status(403).json({error: "Invalid ID" })
          }
        })
      } else {
        res.status(403).json({ error: "No token" })
      }
});






module.exports = router;
