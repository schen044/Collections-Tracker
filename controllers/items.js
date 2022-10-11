const Item = require('../models/item');

module.exports = {
  new: newItem
//   create
};

function newItem(req, res) {
  res.render('items/new', { title: 'Add Item'});
}