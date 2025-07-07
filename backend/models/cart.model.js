const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const itemSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  product: { type: String, ref: 'Product' },
  quantity: Number
}, { _id: false });

const cartSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  user: { type: String, ref: 'User' },
  items: [itemSchema]
}, { _id: false, timestamps: true });

module.exports = mongoose.model('Cart', cartSchema);