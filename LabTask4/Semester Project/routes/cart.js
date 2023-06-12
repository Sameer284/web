const express = require("express");
let router = express.Router();
let Product = require("../models/Product");

router.get("/freshfood/add-to-cart/:id", (req, res) => {
    let cart = req.cookies["cart"];
    if (!cart) cart = [];
    cart.push(req.params.id);
    res.cookie("cart", cart);
    return res.redirect("back");
  });

  router.get("/cart", async (req, res) => {
    let cart = req.cookies["cart"];
    if (!cart) cart = [];
    let products = await Product.find({ _id: { $in: cart } });
    let total = 0;
    for (let index = 0; index < products.length; index++) {
      total += products[index].price;
    }
    console.log(cart);

    return res.render("cart", { products, total });
  });
  router.get("/freshfood/remove-from-cart/:id", (req, res) => {
    let cart = req.cookies["cart"];
    if (!cart) cart = [];
    let index = cart.find((c) => c == req.params.id);
    cart.splice(index, 1);
  
    res.cookie("cart", cart);
    return res.redirect("back");
  });

//   router.get('/cart', (req, res) => {
//     res.render('cart', { products: products, total: total }); // Replace [] and 0 with actual cart items and total
//   });
module.exports = router;