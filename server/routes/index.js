const middleware = require("../middleware");
module.exports = function (app) {
  app.use("/", require("./auth"));
  app.use("/", require("./product"));
  app.use(
    "/admin",
    middleware.AuthorizationMiddlware,
    middleware.AdminMiddleware,
    require("./admin")
  );
};
