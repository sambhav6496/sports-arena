import express from "express";
import bodyParser from "body-parser";
import session from 'express-session';
import mongoose from 'mongoose';
import { render } from "ejs";
require("babel-core/register");
require("babel-polyfill");

const Auth = require("./api/auth/index");
const product = require("./api/product/index");
const sportsArena = require("./views");
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.json());



//var MongoStore = require("connect-mongo")(session);

const dbURL = "mongodb://localhost:27017/Sports-Arena" ;
const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
};
const connection =  mongoose.createConnection(dbURL, dbOptions);

// const sessionStore = new MongoStore({
//   mongooseConnection: connection,
//   collection: "sessions",
// });
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);


app.use("/api", product, Auth);
app.use("/sportsArena", sportsArena);

app.get("/session", (req, res) => {
  console.log(req.session.userDetails);
  res.json(req.session.userDetails);
});

module.exports = app;
