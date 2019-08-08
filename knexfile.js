const { DB_URL } = process.env;
const ENV = process.env.NODE_ENV || "development";

const baseConfig = {
  client: "pg",
  migrations: {
    directory: "./db/migrations"
  },
  seeds: {
    directory: "./db/seeds"
  }
};

const customConfig = {
  development: {
    connection: {
      database: "gallary_test"
      // username,
      // password
    }
  },
  test: {
    connection: {
      database: "gallary_test"
      // username,
      // password
    }
  },

  // ...
  production: {
    connection: `${DB_URL}?ssl=true`
  }
};
// const dbConfig = { ...customConfig[ENV], ...baseConfig };

module.exports = { ...customConfig[ENV], ...baseConfig };
