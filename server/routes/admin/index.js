const AdminRouter = require("express").Router();
const AdminProductRoutes = require("./product");

AdminRouter.use("/product", AdminProductRoutes);

module.exports = AdminRouter;
