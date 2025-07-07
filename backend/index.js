require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth.routes');
const productRoutes = require('./routes/product.routes');
const cartRoutes = require('./routes/cart.routes');
const orderRoutes = require('./routes/order.routes');
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors({origin:"*"}))
connectDB();

app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/orders', orderRoutes);

app.listen(process.env.PORT || 5000, () => console.log(`Server running at http://localhost:${process.env.PORT}`));