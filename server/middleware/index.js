const AdminMiddleware = require("./admin-middleware");
const AuthorizationMiddlware = require("./user-loggedin-middleware");
const UserMiddleware = require("./user-middleware");

module.exports = {
  AdminMiddleware,
  AuthorizationMiddlware,
  UserMiddleware,
};
