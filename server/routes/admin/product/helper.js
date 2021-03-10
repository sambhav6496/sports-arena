const Products = require("../../../models/Products");
class AdminProductHelper {
  async addProducts(productDetails) {
    try {
      await Products.create(productDetails);
      return {
        product: productDetails,
      };
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new AdminProductHelper();
