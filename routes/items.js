var express = require('express');
var router = express.Router();
const itemsCtrl = require('../controllers/items');
const isLoggedIn = require('../config/auth');

// ALL routes start with /items (from server.js)
// return form to add new post - GET /items/new new
router.get('/new', isLoggedIn, itemsCtrl.new);
// create new post - POST /items create
router.post('/', isLoggedIn, itemsCtrl.create);
// read all posts - GET /items index
router.get('/', itemsCtrl.index);
// create a comment for a post - POST /items/:id/collections
router.post('/:id/collections', isLoggedIn, itemsCtrl.addToCollection)
// read a specific post - GET /items/:id show
router.get('/:id', itemsCtrl.show);
// delete a specific post - DELETE /items/:id delete
router.delete('/:id', isLoggedIn, itemsCtrl.delete);
// return view form to edit a post - GET /items/:id/edit edit
router.get('/:id/edit', isLoggedIn, itemsCtrl.edit);
// update specified post - PUT /items/:id update
router.put('/:id', isLoggedIn, itemsCtrl.update)

module.exports = router;