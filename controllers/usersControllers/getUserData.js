const { fetchUserData } = require("../../models/fetchUserData");

getUserData = (req, res, next) => {
  const { profilername } = req.params;
  fetchUserData(profilername)
    .then(([user]) => {
      if (!user)
        return Promise.reject({ code: "404", msg: "Page does not exist" });
      res.status(200).send({ user });
    })
    .catch(next);
};

module.exports = { getUserData };
