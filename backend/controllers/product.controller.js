const Product = require('../models/product.model');

exports.getProducts = async (req, res) => {
  const { search, category, page = 1, limit = 10, sort } = req.query;

  const query = {};
  if (search) query.name = { $regex: search, $options: 'i' };
  if (category) query.category = category;

  try {
    const total = await Product.countDocuments(query);
    const totalPages = Math.ceil(total / limit);

    let queryExec = Product.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    // ✅ Only apply sort if it's a non-empty string
    if (sort && typeof sort === 'string' && sort.trim() !== '') {
      queryExec = queryExec.sort(sort);
    }

    const products = await queryExec;

    res.json({
      total,
      page: Number(page),
      totalPages,
      products
    });
  } catch (err) {
    res.status(500).json({
      error: 'Failed to fetch products',
      details: err.message
    });
  }
};

exports.createProduct = async (req, res) => {
  try {
    const { name, price, stock, category } = req.body;

    if (!name || !price || !stock || !category) {
      return res.status(400).json({ error: 'All product fields are required' });
    }

    const product = new Product({ name, price, stock, category });
    await product.save();

    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create product', details: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    Object.assign(product, req.body); // update fields
    const updated = await product.save();

    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: 'Failed to update product', details: err.message });
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    await Product.deleteOne({ _id: req.params.id });
    res.json({ message: `Deleted product "${product.name}"` });
  } catch (err) {
    res.status(400).json({ error: 'Failed to delete product', details: err.message });
  }
};