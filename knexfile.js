const { DB_URL } = process.env;
const ENV = process.env.NODE_ENV || "development";

const baseConfig = {
  client: "pg",
  migrations: {
    directory: "./db/migrations"
  },
  seeds: {
    directory: "./db/seed"
  }
};

const customConfig = {
  development: {
    connection: {
      database: "gallary_database"
      // username,
      // password
    }
  },
  test: {
    connection: {
      database: "gallary_database_test"
      // username,
      // password
    }
  },
  production: {
    connection: `${DB_URL}?ssl=true`
  }
};

module.exports = { ...customConfig[ENV], ...baseConfig };
