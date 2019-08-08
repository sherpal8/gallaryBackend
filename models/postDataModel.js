const connection = require("../connection.js");

exports.postDataModel = newUserData => {
  return connection
    .insert(newUserData)
    .into("users")
    .returning("*")
    .then(user => user[0]);
};
