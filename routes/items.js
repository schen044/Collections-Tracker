var express = require('express');
var router = express.Router();
const itemsCtrl = require('../controllers/items');
const isLoggedIn = require('../config/auth');

// ALL routes start with /collections (from server.js)
// return form to add new post - GET /items/new new
router.get('/new', itemsCtrl.new);



module.exports = router;