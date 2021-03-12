const router = require("express").Router();
const AuthRouter = require("./route");

router.get("/login", (req, res) => {
  res.render("login", {userStatus : "login"});
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/login", AuthRouter.login);
router.post("/register", AuthRouter.register);

module.exports = router;
