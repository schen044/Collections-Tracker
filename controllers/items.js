const Item = require('../models/item');
const Collection = require('../models/collection')

module.exports = {
  new: newItem,
  create,
  index,
  show,
  addToCollection
};

function newItem(req, res) {
  res.render('items/new', { title: 'Add Item'});
}

function create(req, res) {
  Item.create(req.body, function(err, item) {
    if(err) {
      console.log(err)
      res.redirect('./collections')
    }
    console.log(item);
    res.redirect('./collections')
  })
}

function index(req, res) {
  Item.find({}, function(err, items) {
    res.render('items/index', { title: 'Items', items });
  });
}

function show(req, res) {
  Item.findById(req.params.id, function(err, item) {
    Collection.find({}, function(err, collections) {
      res.render('items/show', { title: 'Item Detail', item, collections});
    })
  });
}

function addToCollection(req, res) {
  Item.findById(req.params.id, function(err, item) {
    Collection.findById(req.body.collectionId, function(err, collections) {
      collections.itemName.push(item)
      collections.save(function(err) {
        res.redirect(`/items/${item._id}`)
      })
    })
  })
}