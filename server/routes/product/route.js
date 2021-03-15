const ProductHelper = require("./helper");

class ProductRouter {
  async addProduct(req, res) {
    try {
      const productDetails = req.body.productDetails;
      const product = await ProductHelper.addProduct(productDetails);
      return res.status(200).json(product);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async getProduct(req, res) {
    try {
      const productId = req.params.Id;
      const getProduct = await ProductHelper.getProduct(productId);
      return res.status(200).json(getProduct);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async deletetProduct(req, res) {
    try {
      const productId = req.params.Id;
      const getProduct = await ProductHelper.deleteProduct(productId);
      return res.status(200).json(getProduct);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async updateProduct(req, res) {
    try {
      const productDetails = req.body.productDetails;
      const productId = req.params.Id;
      const getProduct = await ProductHelper.updateProduct(
        productId,
        productDetails
      );
      return res.status(200).json(getProduct);
    } catch (error) {
      return res.status(400).json(error);
    }
  }
  async showProduct(req, res) {
    try {
      const products = await ProductHelper.showProduct();
      const user = req.session.user
      if(user){
        return res.render("home", { userName: user.firstName , products: products, userStatus : true });
      }else{
        return res.render("home", { userName: "login", products: products, userStatus : false });
      }
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = new ProductRouter();
