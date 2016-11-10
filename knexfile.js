// Update with your config settings.

module.exports = {

  development: {
      client: 'pg',
      connection: {
        host: '127.0.0.1',
        database: 'reddit_collab_dev'
    },
    migrations: {
            directory: __dirname + '/src/server/db/migrations'
        },
        seeds: {
            directory: __dirname + '/src/server/db/seeds/dev'
        }
  },

  test: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'reddit_collab_test'
  },
  migrations: {
            directory: __dirname + '/src/server/db/migrations'
        },
        seeds: {
            directory: __dirname + '/src/server/db/seeds/test'
        }
  },

  production: {
   client: 'pg',
   connection: process.env.DATABASE_URL,
   migrations: {
            directory: __dirname + '/src/server/db/migrations'
        }
 }

};
