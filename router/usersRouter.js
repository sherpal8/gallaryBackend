const express = require("express");
const usersRouter = express.Router();

const {
  getUserData,
  postUserData
} = require("../controllers/usersControllers");

const { errorHandler405 } = require("../errors/errors");

usersRouter
  .route("/")
  .post(postUserData.postUserData)
  .all(errorHandler405);

usersRouter
  .route("/:profilername")
  .get(getUserData.getUserData)
  .all(errorHandler405);

module.exports = { usersRouter };
