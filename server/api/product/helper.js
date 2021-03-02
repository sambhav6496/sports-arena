const Product = require("../../models/Products");

class ProductHelper {
  async addProduct(productDetails) {
    await Product.create(productDetails);
    return productDetails;
  }

  async getProduct(productId) {
    const checkProductById = await Product.findById(productId);
    if (checkProductById) {
      return checkProductById;
    }
    throw { error: "user with given id not found" };
  }
  async deleteProduct(productId) {
    const deleteProduct = await Product.findByIdAndRemove(productId);
    if (deleteProduct) {
      return deleteProduct;
    }
    throw { error: "user with given id not found" };
  }
  async updateProduct(productId, productDetails) {
    const product = await Product.findById(productId);
    if (product) {
      const updateKeys = Object.keys(productDetails);
      updateKeys.forEach((keys) => (product[keys] = productDetails[keys]));
      const updateProduct = await product.save();
      return updateProduct;
    }
    throw { error: "user with given id not found" };
  }
  async showProduct() {
    const product = await Product.find({});
    return product;
  }
}

module.exports = new ProductHelper();
