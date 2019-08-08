const { postDataModel } = require("../../models/postDataModel");

postUserData = (req, res, next) => {
  const newUserData = req.body;
  postDataModel(newUserData)
    .then(user => {
      if (!user || user.profilername === null || user.secretpass === null) {
        return Promise.reject({ code: "400", msg: "Bad request" });
      }
      res.status(200).send({ user });
    })
    .catch(next);
};

module.exports = { postUserData };
