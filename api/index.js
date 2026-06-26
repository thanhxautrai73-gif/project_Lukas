const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-lukas-key';
const MONGODB_URI = process.env.MONGODB_URI;

// Connect to MongoDB
if (MONGODB_URI) {
  mongoose.connect(MONGODB_URI)
    .then(() => {
      console.log('Đã kết nối thành công với MongoDB');
      seedProducts();
    })
    .catch(err => console.error('Lỗi kết nối MongoDB:', err));
} else {
  console.warn('CẢNH BÁO: Chưa cấu hình MONGODB_URI. Hệ thống đang chạy ở chế độ lưu trữ tạm thời (In-memory).');
}

// Schemas & Models
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const productSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  secondaryImage: { type: String, required: true },
  sale: { type: String }
});

const orderSchema = new mongoose.Schema({
  userId: { type: String },
  items: [
    {
      productId: Number,
      name: String,
      price: Number,
      quantity: Number
    }
  ],
  totalAmount: { type: Number, required: true },
  billingDetails: {
    firstName: String,
    lastName: String,
    email: String,
    streetAddress: String,
    town: String,
    phone: String,
    orderNote: String
  },
  status: { type: String, default: 'Đang xử lý' },
  createdAt: { type: Date, default: Date.now }
});

const messageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);
const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
const Message = mongoose.models.Message || mongoose.model('Message', messageSchema);

// In-memory fallbacks if MONGODB_URI is not set
const memoryUsers = [];
const memoryOrders = [];
const memoryMessages = [];
const defaultProducts = [
  { id: 1, name: 'Bộ Côn & Phanh Tự Động', price: 165.00, image: '/assets/img/product/product-6.png', secondaryImage: '/assets/img/product/product-7.png', sale: '25%' },
  { id: 2, name: 'Vành 17 inch 8 Lug', price: 235.00, image: '/assets/img/product/product-2.png', secondaryImage: '/assets/img/product/product-3.png' },
  { id: 3, name: 'Hệ Thống Hút Khí', price: 125.00, image: '/assets/img/product/product-4.png', secondaryImage: '/assets/img/product/product-5.png', sale: '35%' },
  { id: 4, name: 'Vô Lăng Bọc Da', price: 25.00, image: '/assets/img/product/product-11.png', secondaryImage: '/assets/img/product/product-10.png', sale: '15%' },
  { id: 5, name: 'Đĩa Phanh', price: 165.00, image: '/assets/img/product/product-13.png', secondaryImage: '/assets/img/product/product-7.png' },
  { id: 6, name: 'Vành 18 inch 8 Lug', price: 235.00, image: '/assets/img/product/product-3.png', secondaryImage: '/assets/img/product/product-2.png', sale: '25%' },
  { id: 7, name: 'Hệ Thống Hút Turbo', price: 125.00, image: '/assets/img/product/product-7.png', secondaryImage: '/assets/img/product/product-9.png' },
  { id: 8, name: 'Vô Lăng Thể Thao', price: 25.00, image: '/assets/img/product/product-12.png', secondaryImage: '/assets/img/product/product-13.png', sale: '11%' }
];

// Helper to seed products in MongoDB if collection is empty
async function seedProducts() {
  try {
    const count = await Product.countDocuments();
    if (count === 0) {
      await Product.insertMany(defaultProducts);
      console.log('Đã nạp dữ liệu sản phẩm mặc định vào MongoDB');
    }
  } catch (err) {
    console.error('Lỗi khi nạp dữ liệu sản phẩm:', err);
  }
}

// Helper Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  
  if (!token) return res.status(401).json({ message: 'Không tìm thấy token xác thực' });
  
  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Token không hợp lệ hoặc đã hết hạn' });
    req.user = user;
    next();
  });
};

// Root endpoint
app.get('/api', (req, res) => {
  res.json({
    message: 'Lukas Shop API đang hoạt động mượt mà!',
    database: MONGODB_URI ? 'MongoDB (Connected)' : 'In-Memory (Ephemeral)'
  });
});

// Auth Routes
app.post('/api/auth/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    
    if (!username || !email || !password) {
      return res.status(400).json({ message: 'Vui lòng cung cấp đầy đủ thông tin' });
    }
    
    // Check duplication
    if (MONGODB_URI) {
      const userExists = await User.findOne({ $or: [{ email }, { username }] });
      if (userExists) {
        return res.status(400).json({ message: 'Tên đăng nhập hoặc email đã tồn tại' });
      }
    } else {
      const userExists = memoryUsers.find(u => u.email === email || u.username === username);
      if (userExists) {
        return res.status(400).json({ message: 'Tên đăng nhập hoặc email đã tồn tại' });
      }
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    let userId;
    
    if (MONGODB_URI) {
      const newUser = new User({ username, email, password: hashedPassword });
      const savedUser = await newUser.save();
      userId = savedUser._id;
    } else {
      const newUser = {
        id: memoryUsers.length + 1,
        username,
        email,
        password: hashedPassword,
        createdAt: new Date()
      };
      memoryUsers.push(newUser);
      userId = newUser.id;
    }
    
    const token = jwt.sign({ id: userId, username, email }, JWT_SECRET, { expiresIn: '24h' });
    
    res.status(201).json({
      token,
      user: { id: userId, username, email },
      message: 'Đăng ký tài khoản thành công!'
    });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi máy chủ', error: error.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    if (!username || !password) {
      return res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin đăng nhập' });
    }
    
    let user;
    if (MONGODB_URI) {
      user = await User.findOne({ $or: [{ username }, { email: username }] });
    } else {
      user = memoryUsers.find(u => u.username === username || u.email === username);
    }
    
    if (!user) {
      return res.status(400).json({ message: 'Tài khoản hoặc mật khẩu không chính xác' });
    }
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Tài khoản hoặc mật khẩu không chính xác' });
    }
    
    const userId = MONGODB_URI ? user._id : user.id;
    const token = jwt.sign({ id: userId, username: user.username, email: user.email }, JWT_SECRET, { expiresIn: '24h' });
    
    res.json({
      token,
      user: { id: userId, username: user.username, email: user.email },
      message: 'Đăng nhập thành công!'
    });
  } catch (error) {
    res.status(500).json({ message: 'Lỗi máy chủ', error: error.message });
  }
});

app.get('/api/auth/me', authenticateToken, (req, res) => {
  res.json({ user: req.user });
});

// Products Routes
app.get('/api/products', async (req, res) => {
  try {
    if (MONGODB_URI) {
      const dbProducts = await Product.find().sort({ id: 1 });
      res.json(dbProducts);
    } else {
      res.json(defaultProducts);
    }
  } catch (error) {
    res.status(500).json({ message: 'Lỗi khi tải sản phẩm', error: error.message });
  }
});

app.get('/api/products/:id', async (req, res) => {
  try {
    if (MONGODB_URI) {
      const product = await Product.findOne({ id: parseInt(req.params.id) });
      if (!product) return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
      res.json(product);
    } else {
      const product = defaultProducts.find(p => p.id === parseInt(req.params.id));
      if (!product) return res.status(404).json({ message: 'Không tìm thấy sản phẩm' });
      res.json(product);
    }
  } catch (error) {
    res.status(500).json({ message: 'Lỗi máy chủ', error: error.message });
  }
});

// Orders Routes
app.post('/api/orders', async (req, res) => {
  try {
    const { items, totalAmount, billingDetails } = req.body;
    
    if (!items || items.length === 0 || !totalAmount || !billingDetails) {
      return res.status(400).json({ message: 'Thông tin đơn hàng không hợp lệ' });
    }
    
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    let userId = null;
    
    if (token) {
      try {
        const decoded = jwt.verify(token, JWT_SECRET);
        userId = decoded.id;
      } catch (err) {
        // Continue as guest
      }
    }
    
    if (MONGODB_URI) {
      const newOrder = new Order({ userId, items, totalAmount, billingDetails });
      await newOrder.save();
      res.status(201).json({ order: newOrder, message: 'Đặt hàng thành công!' });
    } else {
      const newOrder = {
        id: memoryOrders.length + 1,
        userId,
        items,
        totalAmount,
        billingDetails,
        status: 'Đang xử lý',
        createdAt: new Date()
      };
      memoryOrders.push(newOrder);
      res.status(201).json({ order: newOrder, message: 'Đặt hàng thành công!' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Lỗi máy chủ', error: error.message });
  }
});

app.get('/api/orders', authenticateToken, async (req, res) => {
  try {
    if (MONGODB_URI) {
      const userOrders = await Order.find({ userId: req.user.id }).sort({ createdAt: -1 });
      res.json(userOrders);
    } else {
      const userOrders = memoryOrders.filter(o => o.userId === req.user.id);
      res.json(userOrders);
    }
  } catch (error) {
    res.status(500).json({ message: 'Lỗi máy chủ', error: error.message });
  }
});

// Contact Route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'Vui lòng nhập đầy đủ thông tin liên hệ' });
    }
    
    if (MONGODB_URI) {
      const newMessage = new Message({ name, email, subject, message });
      await newMessage.save();
      res.status(201).json({ message: 'Gửi tin nhắn thành công! Chúng tôi sẽ phản hồi sớm.' });
    } else {
      const newMessage = {
        id: memoryMessages.length + 1,
        name,
        email,
        subject,
        message,
        createdAt: new Date()
      };
      memoryMessages.push(newMessage);
      res.status(201).json({ message: 'Gửi tin nhắn thành công! Chúng tôi sẽ phản hồi sớm.' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Lỗi máy chủ', error: error.message });
  }
});

// For local testing
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}

module.exports = app;
