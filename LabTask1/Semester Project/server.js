const express = require("express");
const app=express();
var path = require('path');
var expressLayouts = require("express-ejs-layouts");
var cookieParser = require("cookie-parser");
var session = require("express-session");
const methodOverride = require('method-override');
app.use((req, res, next) => {
  // res.send("site is down for maintenance");
  console.log(req.url);
  next();
});
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded());
app.use(expressLayouts);
app.use(cookieParser());
app.use(
  session({
    secret: "My Top Secret String",
    cookie: { maxAge: 60000 },
    resave: true,
    saveUninitialized: true,
  })
);
app.use(require("./middlewares/checkSession"));
app.set("view engine", "ejs");
app.use("/", require("./routes/cart"));
app.use("/", require("./routes/auth"));
app.use("/", require("./routes/products"));
app.get("/cookie-test", (req, res) => {
  let visit = req.cookies["page-visits"];
  if (!visit) visit = 1;
  else visit = Number(visit) + 1;
  res.cookie("page-visits", visit);
  return res.send("You Visited: " + visit + " Times");
});
app.get("/", (req, res) => {
  res.render("homepage");
});
app.use((req, res, next) => {
  res.status(404).send("Not Found");
});

app.listen(4000, () => {
  console.log("Server Started");
});
const mongoose = require("mongoose");
  mongoose
  .connect("mongodb+srv://fa20bcs011:sameer011@cluster0.b9qfrnb.mongodb.net/Cluster0?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => console.log("Connected to Mongo ...."))
  .catch((error) => console.log(error.message));
