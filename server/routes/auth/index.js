const router = require("express").Router();
const AuthRouter = require("./route");

router.get("/login", AuthRouter.loginStatus)

router.get("/register", (req, res) => {
  res.render("register", { userName: "Register", userStatus: false });
});

router.post("/login", AuthRouter.login);
router.post("/register", AuthRouter.register);

module.exports = router;
