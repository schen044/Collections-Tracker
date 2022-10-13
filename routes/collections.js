var express = require('express');
var router = express.Router();
const collectionsCtrl = require('../controllers/collections');
const isLoggedIn = require('../config/auth');
const { collection } = require('../models/item');

// ALL routes start with /collections (from server.js)
// read all posts - GET /collections index
router.get('/', collectionsCtrl.index);
// return form to add new post - GET /collections/new new
router.get('/new', collectionsCtrl.new);
// create new post - POST /collections create
router.post('/', collectionsCtrl.create);
// read a specific post - GET /collections/:id show
router.get('/:id', collectionsCtrl.show);
// delete a specific post - DELETE /collections/:id delete
router.delete('/:id', collectionsCtrl.delete);
router.delete('/:collectionId/items/:itemId', collectionsCtrl.deleteOneItem);

module.exports = router;