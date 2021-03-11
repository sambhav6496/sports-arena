const userMiddleware = (req, res, next) => {
  const user = req.session.user;
  if (user) {
    res.status(200).redirect("/product");
    next();
  } else {
    next();
  }
};

module.exports = userMiddleware;
