const AdminMiddleware = require('./admin-middleware');
const AuthorizationMiddlware = require('./user-loggedin-middleware');

module.exports = {
    AdminMiddleware,
    AuthorizationMiddlware

}