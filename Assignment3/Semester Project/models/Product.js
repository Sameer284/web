const mongoose = require("mongoose");
let modelSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
});
let Model = mongoose.model("Product", modelSchema);
module.exports = Model;