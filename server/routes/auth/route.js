const AuthHelper = require("./helper");

class AuthRouter {
  async register(req, res) {
    try {
      const userDetails = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      };
      console.log(userDetails);
      const user = await AuthHelper.register(userDetails);
      return res.status(200).json(user);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  async login(req, res) {
    try {
      const userDetails = {
        email: req.body.email,
        password: req.body.password,
      };
      const user = await AuthHelper.login(userDetails);
      if (user) {
        req.session.userDetails = userDetails;
        return res.status(200).redirect("/api/product");
      }
    } catch (error) {
      res.status(400).json(error);
    }
  }
}

module.exports = new AuthRouter();
