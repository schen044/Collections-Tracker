const mongoose = require('mongoose');
// optional shortcut variable
const Schema = mongoose.Schema;


const collectionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  type: String,
  item: [{type: Schema.Types.ObjectId, ref: 'Item'}],
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true },
  userName: String,
  userAvatar: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Collection', collectionSchema);