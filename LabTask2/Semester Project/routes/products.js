const express = require("express");
let router = express.Router();
let Product = require("../models/Product");

router.get("/freshfood", async (req, res) => {
    const products = await Product.find();
    let role = req.session.user ? req.session.user.role : null;
    console.log(role);
    res.render("freshfood", { products: products , role: role });
  });
  router.post("/addproduct", async (req, res) => {
    let prodObj = req.body;
    let product = new Product(prodObj);
    await product.save();
    console.log(product)
    res.redirect("/addproduct");
  });
  router.get("/addproduct", async (req, res) => {
    res.render("addproduct");
  });

  router.delete('/products/:id', async (req, res) => {
    try {
      await Product.findByIdAndDelete(req.params.id);
      res.redirect('/freshfood');
    } catch (error) {
      console.log(error);
      res.status(500).send('Error deleting the product');
    }
  });

  router.get('/editproduct/:id', async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.render('editproduct', { product });
    } catch (error) {
      console.log(error);
      res.status(500).send('Error retrieving product details');
    }
  });
  router.put('/products/:id', async (req, res) => {
    try {
      const { name, price, description } = req.body;
      await Product.findByIdAndUpdate(req.params.id, { name, price, description });
      res.redirect('/freshfood');
    } catch (error) {
      console.log(error);
      res.status(500).send('Error updating the product');
    }
  });
    

  module.exports = router;