
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      knex.raw('ALTER SEQUENCE posts_id_seq RESTART WITH 1').then();
      return Promise.all([
        // Inserts seed entries
        knex('posts').insert({title: '1 - Look at this', user_id: 1, image: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSbRtky1Od2r9DKXsID0F_uPqDRiP4-zpG5RqrEwOLvn4Vn0XRwhNNKUwcI',description: 'Seriously tho...',num_votes:0}),
        knex('posts').insert({title: '2 - I did it!', user_id: 2, image: 'https://lh4.ggpht.com/M1XTibfCgpi5pgjSDb7kXDh21N8fpn-8evzQVAX-qGFhSyArDmSuCAv1pjVp4jbAt_g=h900',description: 'Look at me go!',num_votes:1 }),
        knex('posts').insert({title: '3 - Check me out', user_id: 3, image: 'https://s-media-cache-ak0.pinimg.com/736x/77/40/e5/7740e5d0745f9661170ca81620bd548e.jpg',description: 'Im cute',num_votes: 2 })
      ]);
    });
};
