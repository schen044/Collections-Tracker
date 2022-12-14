const Item = require('../models/item');
const Collection = require('../models/collection')

module.exports = {
  new: newItem,
  create,
  index,
  show,
  addToCollection,
  delete: deleteItem,
  edit,
  update
};

function newItem(req, res) {
  res.render('items/new', { title: 'Add Item'});
}

function create(req, res) {
  Item.create(req.body, function(err, item) {
    if(err) {
      console.log(err)
      res.redirect('/items')
    }
    console.log(item);
    res.redirect('/items')
  })
}

function index(req, res) {
  Item.find({}, function(err, items) {
    res.render('items/index', { title: 'All Items', items });
  });
}

function show(req, res) {
  Item.findById(req.params.id, function(err, item) {
    Collection.find({}, function(err, collections) {
      res.render('items/show', { title: `${item.itemName} Details`, item, collections});
    })
  });
}

function addToCollection(req, res) {
  Item.findById(req.params.id, function(err, reqItem) {
    Collection.findById(req.body.collectionId, function(err, collections) {
      collections.item.push(reqItem)
      collections.save(function(err) {
        res.redirect(`/items/${reqItem._id}`)
      })
    })
  })
}

function deleteItem(req, res) {
  Item.findById(req.params.id, function(err, item) {
    Item.findOneAndDelete({_id: req.params.id, user: req.user._id}, function(err) {
      // go back to index after deleting
      res.redirect('/items');
    });
  })
}

function edit(req, res) {
  Item.findById(req.params.id, function(err, item) {
    Collection.find({}, function(err, collections) {
      res.render('items/edit', { title: `Edit ${item.itemName} Info`, item, collections })
    })
  });
}

function update(req, res) {
  Item.findOneAndUpdate({_id: req.params.id, user: req.user._id},
    req.body,
    {new: true},
    function(err) {
    res.redirect('/items');
  });
}