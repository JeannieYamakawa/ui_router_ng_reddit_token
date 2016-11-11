'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');





// router.get('/posts', (req, res, next) => {
//     res.redirect('/');
// });

router.get('/posts', function(req,res,next){
    console.log('this works, get /posts route');
    knex('users').innerJoin('posts', 'users.id', 'posts.user_id')
        .then((posts) => {
            // console.log(posts);
            // res.json({
            //     id: posts.id, username: posts.username, updated_at: posts.updated_at, title: posts.title, image:posts.image, description:posts.description, num_votes:posts.num_votes
            // });
            res.json({posts:posts})
        })
})






module.exports = router;
