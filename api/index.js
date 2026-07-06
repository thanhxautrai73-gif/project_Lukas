import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'lucas_secret_key_123456';
const MONGO_URI = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/lucas';

app.use(cors());
app.use(express.json());

// --- MongoDB Connection ---
mongoose.connect(MONGO_URI)
    .then(async () => {
        console.log('Connected to MongoDB successfully!');
        await seedDatabase();
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });

// --- Mongoose Schemas & Models ---

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'user'], default: 'user' },
    createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', UserSchema);

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    secondaryImage: { type: String },
    sale: { type: String },
    createdAt: { type: Date, default: Date.now }
});

const Product = mongoose.model('Product', ProductSchema);

const OrderSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    customerName: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    note: { type: String, default: '' },
    items: [{
        id: { type: String, required: true },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true }
    }],
    total: { type: Number, required: true },
    status: { type: String, enum: ['Chờ xử lý', 'Đang giao', 'Đã hoàn thành', 'Đã hủy'], default: 'Chờ xử lý' },
    createdAt: { type: Date, default: Date.now }
});

const Order = mongoose.model('Order', OrderSchema);

// --- Database Seeding ---
const seedDatabase = async () => {
    try {
        // Seed default admin if no users exist
        const userCount = await User.countDocuments();
        if (userCount === 0) {
            const adminPassword = await bcrypt.hash('admin123', 10);
            const defaultAdmin = new User({
                username: 'admin',
                email: 'admin@lucas.com',
                password: adminPassword,
                role: 'admin'
            });
            await defaultAdmin.save();
            console.log('Seeded default admin user: admin / admin123');
        }

        // Seed default products if empty
        const productCount = await Product.countDocuments();
        if (productCount === 0) {
            const defaultProducts = [
                { name: 'Bộ Côn & Phanh Tự Động', price: 165.00, image: '/assets/img/product/product-6.png', secondaryImage: '/assets/img/product/product-7.png', sale: '25%' },
                { name: 'Vành 17 inch 8 Lug', price: 235.00, image: '/assets/img/product/product-2.png', secondaryImage: '/assets/img/product/product-3.png' },
                { name: 'Hệ Thống Hút Khí', price: 125.00, image: '/assets/img/product/product-4.png', secondaryImage: '/assets/img/product/product-5.png', sale: '35%' },
                { name: 'Vô Lăng Bọc Da', price: 25.00, image: '/assets/img/product/product-11.png', secondaryImage: '/assets/img/product/product-10.png', sale: '15%' },
                { name: 'Đĩa Phanh', price: 165.00, image: '/assets/img/product/product-13.png', secondaryImage: '/assets/img/product/product-7.png' },
                { name: 'Vành 18 inch 8 Lug', price: 235.00, image: '/assets/img/product/product-3.png', secondaryImage: '/assets/img/product/product-2.png', sale: '25%' },
                { name: 'Hệ Thống Hút Turbo', price: 125.00, image: '/assets/img/product/product-7.png', secondaryImage: '/assets/img/product/product-9.png' },
                { name: 'Vô Lăng Thể Thao', price: 25.00, image: '/assets/img/product/product-12.png', secondaryImage: '/assets/img/product/product-13.png', sale: '11%' }
            ];
            await Product.insertMany(defaultProducts);
            console.log('Seeded default products catalog!');
        }
    } catch (e) {
        console.error('Seeding error:', e);
    }
};

// --- Middleware Functions ---
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Không có quyền truy cập. Vui lòng đăng nhập.' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Token không hợp lệ hoặc đã hết hạn.' });
        }
        req.user = user;
        next();
    });
};

const requireAdmin = (req, res, next) => {
    if (!req.user || req.user.role !== 'admin') {
        return res.status(403).json({ message: 'Bạn không có quyền thực hiện hành động này.' });
    }
    next();
};

// --- API Endpoints ---

app.get('/', (req, res) => {
    res.send('Lucas MongoDB API Server is running...');
});

// 1. User Authentication
app.post('/api/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin.' });
        }

        const userExists = await User.findOne({
            $or: [
                { username: { $regex: new RegExp(`^${username}$`, 'i') } },
                { email: { $regex: new RegExp(`^${email}$`, 'i') } }
            ]
        });

        if (userExists) {
            return res.status(400).json({ message: 'Tên đăng nhập hoặc Email đã tồn tại.' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
            role: 'user'
        });
        await newUser.save();
        res.status(201).json({ message: 'Đăng ký thành công!' });
    } catch (error) {
        console.error('Register error:', error);
        res.status(500).json({ message: 'Đã xảy ra lỗi máy chủ.' });
    }
});

app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: 'Vui lòng nhập tên đăng nhập và mật khẩu.' });
        }

        const user = await User.findOne({ username: { $regex: new RegExp(`^${username}$`, 'i') } });
        if (!user) {
            return res.status(400).json({ message: 'Tên đăng nhập hoặc mật khẩu không chính xác.' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Tên đăng nhập hoặc mật khẩu không chính xác.' });
        }

        const token = jwt.sign(
            { id: user._id, username: user.username, role: user.role },
            JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({
            message: 'Đăng nhập thành công!',
            token,
            user: { id: user._id, username: user.username, email: user.email, role: user.role }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Đã xảy ra lỗi máy chủ.' });
    }
});

app.get('/api/users', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const users = await User.find({}, '-password');
        // Map _id to id for frontend compatibility
        const mappedUsers = users.map(u => ({
            id: u._id.toString(),
            username: u.username,
            email: u.email,
            role: u.role,
            createdAt: u.createdAt
        }));
        res.json(mappedUsers);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi tải danh sách người dùng.' });
    }
});

app.put('/api/users/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const { role, email, username } = req.body;

        const updateData = {};
        if (role) updateData.role = role;
        if (email) updateData.email = email;
        if (username) updateData.username = username;

        const updatedUser = await User.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedUser) {
            return res.status(404).json({ message: 'Người dùng không tồn tại.' });
        }
        res.json({ message: 'Cập nhật tài khoản thành công!' });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi cập nhật người dùng.' });
    }
});

app.delete('/api/users/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        if (id === req.user.id) {
            return res.status(400).json({ message: 'Bạn không thể tự xóa tài khoản của chính mình.' });
        }

        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'Người dùng không tồn tại.' });
        }
        res.json({ message: 'Xóa tài khoản thành công!' });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi xóa tài khoản.' });
    }
});

// 2. Products API
app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find({});
        const mappedProducts = products.map(p => ({
            id: p._id.toString(),
            name: p.name,
            price: p.price,
            image: p.image,
            secondaryImage: p.secondaryImage,
            sale: p.sale
        }));
        res.json(mappedProducts);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi tải danh sách sản phẩm.' });
    }
});

app.post('/api/products', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const { name, price, image, secondaryImage, sale } = req.body;
        if (!name || !price) {
            return res.status(400).json({ message: 'Vui lòng điền tên và giá sản phẩm.' });
        }

        const newProduct = new Product({
            name,
            price: parseFloat(price),
            image: image || '/assets/img/product/product-2.png',
            secondaryImage: secondaryImage || '/assets/img/product/product-3.png',
            sale: sale || undefined
        });
        await newProduct.save();
        res.status(201).json({ message: 'Thêm sản phẩm thành công!', product: {
            id: newProduct._id.toString(),
            name: newProduct.name,
            price: newProduct.price,
            image: newProduct.image,
            secondaryImage: newProduct.secondaryImage,
            sale: newProduct.sale
        }});
    } catch (error) {
        res.status(500).json({ message: 'Không thể thêm sản phẩm.' });
    }
});

app.put('/api/products/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const { name, price, image, secondaryImage, sale } = req.body;

        const updateData = {};
        if (name) updateData.name = name;
        if (price) updateData.price = parseFloat(price);
        if (image !== undefined) updateData.image = image;
        if (secondaryImage !== undefined) updateData.secondaryImage = secondaryImage;
        updateData.sale = sale || undefined; // If empty string, unset or undefined

        const updated = await Product.findByIdAndUpdate(id, updateData, { new: true });
        if (!updated) {
            return res.status(404).json({ message: 'Sản phẩm không tồn tại.' });
        }
        res.json({ message: 'Cập nhật sản phẩm thành công!', product: {
            id: updated._id.toString(),
            name: updated.name,
            price: updated.price,
            image: updated.image,
            secondaryImage: updated.secondaryImage,
            sale: updated.sale
        }});
    } catch (error) {
        res.status(500).json({ message: 'Lỗi cập nhật sản phẩm.' });
    }
});

app.delete('/api/products/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Product.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({ message: 'Sản phẩm không tồn tại.' });
        }
        res.json({ message: 'Xóa sản phẩm thành công!' });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi xóa sản phẩm.' });
    }
});

// 3. Orders API
app.get('/api/orders', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const orders = await Order.find({}).sort({ createdAt: -1 });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: 'Lỗi tải danh sách đơn hàng.' });
    }
});

app.post('/api/orders', async (req, res) => {
    try {
        const { customerName, email, address, phone, note, items, total } = req.body;
        if (!customerName || !email || !address || !phone || !items || !total) {
            return res.status(400).json({ message: 'Thiếu thông tin đặt hàng.' });
        }

        const newOrder = new Order({
            id: 'ORD-' + Date.now().toString().slice(-6).toUpperCase(),
            customerName,
            email,
            address,
            phone,
            note: note || '',
            items,
            total: parseFloat(total),
            status: 'Chờ xử lý'
        });
        await newOrder.save();
        res.status(201).json({ message: 'Đặt hàng thành công!', order: newOrder });
    } catch (error) {
        console.error('Order placement error:', error);
        res.status(500).json({ message: 'Lỗi máy chủ khi đặt hàng.' });
    }
});

app.put('/api/orders/:id', authenticateToken, requireAdmin, async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const updated = await Order.findOneAndUpdate({ id }, { status }, { new: true });
        if (!updated) {
            return res.status(404).json({ message: 'Đơn hàng không tồn tại.' });
        }
        res.json({ message: 'Cập nhật trạng thái đơn hàng thành công!', order: updated });
    } catch (error) {
        res.status(500).json({ message: 'Lỗi cập nhật đơn hàng.' });
    }
});

if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}

export default app;
