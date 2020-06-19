// Update with your config settings.
if (process.env.NODE_ENV !== 'test') require ('dotenv').config()
module.exports = {

  // development: {
  //   client: 'pg',
  //   connection: `${process.env.DEV_DATABASE_URL}/${process.env.DEV_DATABASE_NAME}`
  // },

  development: {
    client: 'pg',
    connection: {
      host:`${process.env.PROD_DATABASE_URL}/${process.env.PROD_DATABASE_NAME}`,
      user: 'postgres',
      password: 'Test1234',
      database: 'bst_db'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'bst_db',
      user:     'postgres',
      password: 'Test1234'
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
      database: 'bst_db',
      user:     'postgres',
      password: 'Test1234'
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
