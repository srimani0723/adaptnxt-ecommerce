const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const productSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4  // Use UUID as the product ID
  },
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  category: String,
  stock: { type: Number, default: 0 }
}, { timestamps: true, _id: false });  // Prevent auto ObjectId generation

module.exports = mongoose.model('Product', productSchema);