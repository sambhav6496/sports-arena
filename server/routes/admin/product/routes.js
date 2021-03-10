const AdminProductHelper = require("./helper");
class AdminProductRoutes {
  async addProduct(req, res) {
    try {
      const productDetails = {
        name: req.body.name,
        category: req.body.category,
        material: req.body.material,
        color: req.body.color,
        typeOfSport: req.body.typeOfSport,
        productImatge: {
          url: req.body.url,
          alt: req.body.alternateText,
        },
      };
      const product = await AdminProductHelper.addProducts(productDetails);
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new AdminProductRoutes();
