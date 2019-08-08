const { userData } = require("../data/test-data");

exports.seed = function(knex, Promise) {
  return knex
    .insert(userData)
    .into("users")
    .returning("*")
    .then(users => {
      console.log(`${users.length} users were inserted`);
    });
};
