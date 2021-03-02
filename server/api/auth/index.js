const router = require("express").Router();
const AuthRouter = require("./route");

router.post("/login", AuthRouter.login);
router.post("/register", AuthRouter.register);

module.exports = router;
