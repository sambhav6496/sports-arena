import express from "express";
import bodyParser from "body-parser";
import session from 'express-session';
import mongoose from 'mongoose';
require("babel-core/register");
require("babel-polyfill");

const AuthRoutes = require("./routes/auth");
const ProductRoutes = require("./routes/product");
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
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
  })
);


app.use("/", AuthRoutes);
app.use("/product", ProductRoutes);

app.get("/session", (req, res) => {
  console.log(req.session.userDetails);
  res.json(req.session.userDetails);
});

module.exports = app;
