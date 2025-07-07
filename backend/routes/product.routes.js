const express = require('express');
const router = express.Router();
const {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
} = require('../controllers/product.controller');

const auth = require('../middleware/auth.middleware');
const allowAdmin = require('../middleware/role.middleware');

// Public route
router.get('/', getProducts);

// Admin routes
router.post('/', auth, allowAdmin('admin'), createProduct);
router.put('/:id', auth, allowAdmin('admin'), updateProduct);
router.delete('/:id', auth, allowAdmin('admin'), deleteProduct);

module.exports = router;