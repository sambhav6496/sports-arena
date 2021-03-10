const adminMiddlware = (req, res, next) => {
  const user = req.session.user;
  if (user.user.role == "user") {
    res.status("404").json("user not authorised");
  } else {
    res.status("200").render("addProduct");
    next();
  }
};

module.exports = adminMiddlware;
