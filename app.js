const express = require("express");
const app = express();
const { apiRouter } = require("./router/apiRouter");

const {
  errorHandler400,
  errorHandler422,
  errorHandler404,
  errorHandler500
} = require("./errors/errors.js");

app.use(express.json());

app.use("/api", apiRouter);

app.all("/*", (req, res, next) => {
  res.status(404).send({ msg: "Page does not exist" });
});

app.use(errorHandler400);
app.use(errorHandler422);
app.use(errorHandler404);
app.use(errorHandler500);

module.exports = { app };
