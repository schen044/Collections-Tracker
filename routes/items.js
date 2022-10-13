var express = require('express');
var router = express.Router();
const itemsCtrl = require('../controllers/items');
const isLoggedIn = require('../config/auth');

// ALL routes start with /items (from server.js)
// return form to add new post - GET /items/new new
router.get('/new', itemsCtrl.new);
// create new post - POST /items create
router.post('/', itemsCtrl.create);
// read all posts - GET /items index
router.get('/', itemsCtrl.index);
// read a specific post - GET /items/:id show
router.get('/:id', itemsCtrl.show);
// create a comment for a post - POST /items/:id/collections
router.post('/:id/collections', itemsCtrl.addToCollection)

module.exports = router;