// Update with your config settings.
if (process.env.NODE_ENV !== 'test') require ('dotenv').config()
module.exports = {

  // development: {
  //   client: 'pg',
  //   connection: `${process.env.DEV_DATABASE_URL}/${process.env.DEV_DATABASE_NAME}`
  // },

  development: {
    client: 'pg',
    connection: `postgres://${process.env.PROD_DATABASE_URL}/${process.env.PROD_DATABASE_NAME}`
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
