const AdminProductRoutes = require("express").Router();
const AdminProductRouter = require("./routes");

AdminProductRoutes.route("/").post(AdminProductRouter.addProduct);
AdminProductRoutes.route("/").get(AdminProductRouter.rendAddProduct);

module.exports = AdminProductRoutes;
