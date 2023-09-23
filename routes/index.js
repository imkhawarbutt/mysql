var express = require('express');
const session = require('express-session');
var router = express.Router();
require('dotenv').config()




const { signUp, signIn, account, dashboard, userSearch } = require('../controllers/userController')


var database = require("../database");
var Users = require("../models/Users")

/* GET home page. */

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Search Engine' });
});

router.post('/signin', signIn);
router.post('/signup', signUp);
router.post('/dashboard', dashboard);
router.post('/', userSearch);

router.get('/account', account);



module.exports = router;
