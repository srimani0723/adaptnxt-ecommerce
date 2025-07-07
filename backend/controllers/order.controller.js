const Order = require('../models/order.model');
const Cart = require('../models/cart.model');

exports.placeOrder = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.userId }).populate('items.product');
  if (!cart || cart.items.length === 0) return res.status(400).json({ error: 'Cart empty' });

  const items = cart.items.map(i => ({
    product: i.product._id,
    quantity: i.quantity
  }));
  const totalAmount = cart.items.reduce((sum, i) => sum + i.product.price * i.quantity, 0);

  const order = new Order({ user: req.user.userId, items, totalAmount });
  await order.save();
  cart.items = [];
  await cart.save();

  res.status(201).json(order);
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.userId }).populate('items.product');
  res.json(orders);
};