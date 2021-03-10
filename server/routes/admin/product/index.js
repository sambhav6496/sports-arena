const AdminProductRoutes = require("express").Router();
const AdminProductRouter = require("./routes");

AdminProductRoutes.route("/").get(AdminProductRouter.getProduct);

AdminProductRoutes.route("/:id").get(AdminProductRouter.getProductd);

module.exports = AdminProductRoutes;
