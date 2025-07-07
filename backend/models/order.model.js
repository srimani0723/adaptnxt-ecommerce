const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const orderItemSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  product: { type: String, ref: 'Product' },
  quantity: Number
}, { _id: false });

const orderSchema = new mongoose.Schema({
  _id: { type: String, default: uuidv4 },
  user: { type: String, ref: 'User' },
  items: [orderItemSchema],
  totalAmount: Number,
  status: { type: String, default: 'Processing' }
}, { _id: false, timestamps: true });

module.exports = mongoose.model('Order', orderSchema);