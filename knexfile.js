// Update with your config settings.

module.exports = {

  development: {
      client: 'pg',
      connection: {
        host: 'localhost',
        database: 'uirouter_ng_token_dev'
    },
  },

  test: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'uirouter_ng_token_test'
  },
  },

  production: {
   client: 'pg',
   connection: process.env.DATABASE_URL,
  }
};
