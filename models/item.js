const mongoose = require('mongoose');
// optional shortcut variable
const Schema = mongoose.Schema;


const itemSchema = new Schema({
  itemName: String,
  productId: String,
  vendor: String,
  dateProduced: Date,
  dateOrdered: Date, 
  itemStatus: {
    type: String,
    enum: ['Wishlisted', 'Ordered', 'Shipped', 'Received']
}}, {
  timestamps: true
});

module.exports = mongoose.model('Item', itemSchema);