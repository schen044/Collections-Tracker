const Collection = require('../models/collection');
const Item = require('../models/item');

module.exports = {
  index,
  new: newCollection,
  create,
  show
};

function index(req, res) {
  Collection.find({}, function(err, collections) {
    res.render('collections/index', { title: 'Collections', collections });
  });
}

function newCollection(req, res) {
  res.render('collections/new', { title: 'Add Collection'});
}

function create(req, res) {
  Collection.findById(req.params.id, function(err, collection) {
    if(err) {
      console.log(err)
      res.redirect('./collections')
    }
    req.body.user = req.user._id
    req.body.userName = req.user.name
    req.body.userAvatar = req.user.avatar
    Collection.create(req.body, function(err, collection) {
      console.log(collection);
      res.redirect('./collections')
    })
  })
}

function show(req, res) {
  Collection.findById(req.params.id, function(err, collection) {
    Item.find({}, function(err, dbitems) {
      res.render('collections/show', { title: `${collection.name}`, dbitems, collection});
    })
  });
}