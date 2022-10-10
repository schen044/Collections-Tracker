const Collection = require('../models/collection');

module.exports = {
  index,
//   show,
//   new: newMovie,
//   create
};

function index(req, res) {
  Collection.find({}, function(err, collections) {
    res.render('collections/index', { title: 'Collections', collections });
  });
  
}