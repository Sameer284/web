var express = require('express');
var router = express.Router();
let User = require('../models/User')
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Users' });
});
router.post("/", async (req, res) => {
  let userObj = req.body;
  let user = new User(userObj);
  await user.save();
  console.log(userObj);
  res.redirect("/");
});
router.get("/", async (req, res) => {
  let users = await User.find();
  return res.send(users);
});
router.get("/users", async (req, res) => {
  let users = await User.find();
  res.render("usersView", {
    users,
    pageTitle: "Users",
  });
});

router.delete('/users/:id', async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.redirect('/users'); 
  } catch (error) {
    console.log(error);
    res.status(500).send('Error deleting the book');
  }
});



module.exports = router;
