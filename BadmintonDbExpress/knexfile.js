// Update with your config settings.
// if (process.env.NODE_ENV !== "test") require("dotenv").config();
// require("dotenv").config();
// console.dir(process.env);

module.exports = {
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
      host:`bst-database-2.cwprynonbh7c.us-east-2.rds.amazonaws.com`,
      user: 'postgres',
      password: 'Test1234',
      database: 'bst_db'
    }
  },

  // development: {
  //   client: 'pg',
  //   connection: {
  //     host:`${process.env.PROD_DATABASE_URL}`,
  //     user: 'postgres',
  //     password: 'Test1234',
  //     database: 'bst_db'
  //   }
  // },

  // development: {
  //   client: 'pg',
  //   connection: {
  //     host:`${process.env.DATABASE_URL}`,
  //     user: 'postgres',
  //     password: 'Test1234',
  //     database: 'bst_db'
  //   }
  // },

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
      host:`${process.env.PROD_DATABASE_URL}`,
      user: "postgres",
      password: "Test1234",
      database: "bst_db",
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
