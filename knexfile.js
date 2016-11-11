/**
 * KNEX CONFIG FILE
 */
'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/reddit-clone-app',
    migrations: {
      directory: './server/db/migrations',
    },
    seeds: {
      directory: './server/db/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`,
    migrations: {
      directory: './server/db/migrations',
    },
    seeds: {
      directory: './server/db/seeds',
    },
  },
};
