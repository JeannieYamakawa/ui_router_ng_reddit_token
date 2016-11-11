
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      knex.raw('ALTER SEQUENCE posts_id_seq RESTART WITH 1').then();
      return Promise.all([
        // Inserts seed entries
        knex('posts').insert({title: '1 - Look at this', description: 'Seriously tho...', image:'https://lh6.ggpht.com/sw_iT7GZASdAYeiecsZEHJE-EgDhdK2rCWUzZOJS0OFiGpoi9qn8iMH2nuXHgWg2PA=h900', numberOfVotes: 0, user_id: 1}),
        knex('posts').insert({title: '2 - I did it!', description: 'Look at me go!', image:'https://lh4.ggpht.com/M1XTibfCgpi5pgjSDb7kXDh21N8fpn-8evzQVAX-qGFhSyArDmSuCAv1pjVp4jbAt_g=h900',numberOfVotes: 0, user_id: 1}),
        knex('posts').insert({title: '3 - Check me out', description: 'Go away', image:'https://s-media-cache-ak0.pinimg.com/originals/1e/b6/d9/1eb6d92dcde9c43926bac8585e4dde0a.jpg',numberOfVotes: 0, user_id: 1 })
      ]);
    });
};


// "description", "image", "numberOfVotes", "title", "user_id"
