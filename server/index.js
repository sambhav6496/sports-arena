import express from "express";
import bodyParser from "body-parser";
import session from "express-session";
import mongoose from "mongoose";
require("babel-core/register");
require("babel-polyfill");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(
  express.json({
    type: ["application/json", "text/plain"],
  })
);
app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
    // store: sessionStore,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
    },
    saveUninitialized: false,
  })
);
//var MongoStore = require("connect-mongo")(session);

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
const AuthRoutes = require("./routes/auth");
const ProductRoutes = require("./routes/product");

require("./routes")(app);
app.use("/", AuthRoutes);
app.use("/product", ProductRoutes);

app.get("/session", (req, res) => {
  console.log(req.session.user);
  res.json({ user: req.session.user });
});

module.exports = app;
