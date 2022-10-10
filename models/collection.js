const mongoose = require('mongoose');
// optional shortcut variable
const Schema = mongoose.Schema;


const collectionSchema = new Schema({
  name: String,
  type: String,
}, {
  timestamps: true
});

module.exports = mongoose.model('Collection', collectionSchema);