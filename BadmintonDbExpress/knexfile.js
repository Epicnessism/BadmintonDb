// Update with your config settings.
if (process.env.NODE_ENV !== "test") require("dotenv").config();
module.exports = {
  // use this for local testing
  // development: {
  //   client: "pg",
  //   connection: {
  //     host: "127.0.0.1",
  //     user: "postgres",
  //     password: "Test1234",
  //     database: "bst_db",
  //   },
  // },

  development: {
    client: 'pg',
    connection: {
      host:`${process.env.PROD_DATABASE_URL}`,
      user: 'postgres',
      password: 'Test1234',
      database: 'bst_db'
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "bst_db",
      user: "postgres",
      password: "Test1234",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "postgresql",
    connection: {
      database: "bst_db",
      user: "postgres",
      password: "Test1234",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
