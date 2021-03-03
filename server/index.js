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
var MongoStore = require("connect-mongo")(session);

const dbURL = "mongodb://localhost:27017/Sports-Arena";
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};

const connection = mongoose.createConnection(dbURL, dbOptions);

const sessionStore = new MongoStore({
  mongooseConnection: connection,
  collection: "sessions",
});
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    store: sessionStore,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

const Auth = require("./api/auth/index");
const product = require("./api/product/index");
const sportsArena = require("../views/index");

app.use("/api", product, Auth);
app.use("/sportsArena", sportsArena);
app.get("/session", (req, res) => {
  console.log(req.session.userDetails);
  res.json(req.session.userDetails);
});

module.exports = app;
