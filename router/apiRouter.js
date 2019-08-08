const express = require("express");
const { usersRouter } = require("./usersRouter");

const apiRouter = express.Router();

apiRouter.use("/users", usersRouter);

module.exports = { apiRouter };
