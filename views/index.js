const express = require("express");
const router = require("express").Router();

router.use(express.static("public"));
router.get("/register", (req, res) => {
  res.render("register");
});
router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
