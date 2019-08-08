const express = require("express");
const app = express();
const cors = require("cors");
const { apiRouter } = require("./router/apiRouter");

const {
  errorHandler400,
  errorHandler422,
  errorHandler404,
  errorHandler500,
  errorHandler405
} = require("./errors/errors.js");

app.use(cors());

app.use(express.json());

app.use("/api", apiRouter);

app.all("/*", (req, res, next) => {
  res.status(404).send({ msg: "Page does not exist" });
});

app.use(errorHandler400);
app.use(errorHandler422);
app.use(errorHandler404);
app.use(errorHandler500);
app.use(errorHandler405);

module.exports = { app };
