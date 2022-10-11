var express = require('express');
var router = express.Router();
const itemsCtrl = require('../controllers/items');
const isLoggedIn = require('../config/auth');

// ALL routes start with /items (from server.js)
// return form to add new post - GET /items/new new
router.get('/new', itemsCtrl.new);
// create new post - POST /items create
router.post('/', itemsCtrl.create);

module.exports = router;