var express = require('express');
var router = express.Router();
const collectionsCtrl = require('../controllers/collections');
const isLoggedIn = require('../config/auth');

// ALL routes start with /collections (from server.js)
// read all posts - GET /collections index
router.get('/', collectionsCtrl.index);


module.exports = router;