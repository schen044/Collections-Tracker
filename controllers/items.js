const Item = require('../models/item');
const Collection = require('../models/collection')

module.exports = {
  new: newItem,
  create
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