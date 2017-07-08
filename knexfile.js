// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/skinner_panel'
  },
  test: {
      client: 'pg',
      connection: 'postgres://localhost/test_skinner_panel'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
