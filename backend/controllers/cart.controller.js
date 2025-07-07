const Cart = require('../models/cart.model');

exports.getCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.userId }).populate('items.product');
  res.json(cart || { items: [] });
};

exports.addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  let cart = await Cart.findOne({ user: req.user.userId });
  if (!cart) cart = new Cart({ user: req.user.userId, items: [] });

  const existing = cart.items.find(i => i.product === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.items.push({ product: productId, quantity });
  }

  await cart.save();
  res.json(cart);
};

exports.updateCartItem = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.userId });
  const item = cart.items.id(req.params.itemId);
  if (item) {
    item.quantity = req.body.quantity;
    await cart.save();
    res.json(cart);
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
};

exports.removeCartItem = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user.userId });
  cart.items.id(req.params.itemId).remove();
  await cart.save();
  res.json(cart);
};