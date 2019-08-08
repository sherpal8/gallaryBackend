const { userData } = require("../data/index");

exports.seed = function(knex, Promise) {
  const userInsertion = knex("users").insert(userData);
  return knex.migrate
    .rollback()
    .then(() => knex.migrate.latest())
    .then(() => {
      return knex("users")
        .insert(userData)
        .returning("*");
    });
};
