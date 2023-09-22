var express = require('express');
const session = require('express-session');
var router = express.Router();

var database = require("../database");
var Users = require("../models/Users")

/* GET home page. */

router.get('/',  function  (req, res, next) {
  
  res.render('index', { title: 'Search Engine'});

});


router.post('/', async function  (req, res, next) {

  if (!req.body.name)
    key = "";
  else
    key = req.body.name;

    console.log("KEY IS : "+key);

  const userList =  await Users.getUsers(key);

  res.render('index', { title: 'Search Engine', session: req.session, data: userList });


});


module.exports = router;
