const express = require('express');
const router = express.Router();
const { placeOrder, getOrders } = require('../controllers/order.controller');
const auth = require('../middleware/auth.middleware');

router.post('/', auth, placeOrder);
router.get('/', auth, getOrders);

module.exports = router;