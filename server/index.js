const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
require("babel-core/register");
require("babel-polyfill");
app.set("view engine", "ejs");
app.use(bodyParser.json());
const mongoose = require("mongoose");
const dbURL = "mongodb://localhost:27017/Sports-Arena";
mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
mongoose.connection.on("connected", function () {
  console.log("connected", dbURL);
});
mongoose.connection.on("error", function (error) {
  console.log(error);
});

const Auth = require("./api/auth/index");
const product = require("./api/product/index");
const sportsArena = require("../views/index");

app.use("/api", product, Auth);
app.use("/sportsArena", sportsArena);

module.exports = app;
