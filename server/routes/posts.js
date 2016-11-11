'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');





router.get('/posts', (req, res, next) => {
    res.redirect('/');
});

router.get('/', function(req,res,next){
    knex('users').innerJoin('posts', 'users.id', 'posts.user_id')
        .then((posts) => {
            console.log(posts);
            res.send({
                posts: posts,
            })

            
            // res.json({
            //     posts: posts,
            // });
        })
})






module.exports = router;
