const express = require("express");
const res = require("express/lib/response");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("어드민 이후 url");
});

router.get("/products", (req, res) => {
  res.render("admin/products.html", {
    name: "Hello",
  });
});

router.get("/products/write", (req, res) => {
  res.render("admin/write.html");
});

router.post("/products/write", (req, res) => {
  res.send(req.body);
  console.log(req);
});

module.exports = router;
