const connection = require("../connection.js");

exports.postDataModel = newUserData => {
  return connection
    .insert(newUserData)
    .into("users")
    .returning("*")
    .then(users => users[0]);
};
