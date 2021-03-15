const AuthHelper = require("./helper");
const ProductHelper =  require("../product/helper")

class AuthRouter {
  async register(req, res) {
    try {
      const userDetails = {
        role: req.body.role,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
      };
      const { user } = await AuthHelper.register(userDetails);
      req.session.user = user;
      return res.status(200).json(user);
    } catch (error) {
      console.log(error);
      res.status(400).json(error);
    }
  }

  async login(req, res) {
    try {
      const userDetails = {
        email: req.body.email,
        password: req.body.password,
      };
      const { user } = await AuthHelper.login(userDetails);
      if (user) {
        req.session.user = user;
        return res.status(200).redirect("/product");
      }
    } catch (error) {
      res.status(400).json(error);
    }
  }
  async loginStatus(req,res){
    const user = req.session.user
    try {
      if(user){
        const products = await ProductHelper.showProduct()
        return res.render("home", { userName: user.firstName , products: products, userStatus : true });
      }else{
        res.render("login", { userName: "login", userStatus: false });
      }
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new AuthRouter();
