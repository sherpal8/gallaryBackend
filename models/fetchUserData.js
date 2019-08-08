const connection = require("../connection.js");

exports.fetchUserData = profilername => {
  return connection
    .select("*")
    .from("users")
    .where("profilername", profilername)
    .then(user => {
      return user;
    });
};
