const Products = require("../../../models/Products");
class AdminProductRoutes {
  async getProduct(req, res) {
    const products = await AdminProductHelper.getProduct();
    res.json({ response: "reached" });
  }
  async getProductd(req, res) {
    res.json({ resddponse: req.params.id });
  }
}

module.exports = new AdminProductRoutes();
