const connection = require("../connection.js");

exports.fetchUserData = profilername => {
  return connection
    .select("*")
    .from("users")
    .where("userName", profilername)
    .then(user => {
      return user;
    });
};
