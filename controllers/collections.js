const Collection = require('../models/collection');

module.exports = {
  index,
//   show,
  new: newCollection,
  create
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
  Collection.create(req.body, function(err, collection) {
    if(err) {
      console.log(err)
      res.redirect('./collections')
    }
    console.log(collection);
    res.redirect('./collections')
  })
}