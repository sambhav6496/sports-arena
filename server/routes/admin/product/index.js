const AdminProductRoutes = require("express").Router();
const AdminProductRouter = require("./routes");

AdminProductRoutes.route("/").post(AdminProductRouter.addProduct);

module.exports = AdminProductRoutes;
