import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
    secondaryImage?: string;
    sale?: string;
}

interface Order {
    id: string;
    customerName: string;
    email: string;
    phone: string;
    address: string;
    note: string;
    items: Array<{ id: string | number; name: string; price: number; quantity: number }>;
    total: number;
    status: string;
    createdAt: string;
}

interface User {
    id: string;
    username: string;
    email: string;
    role: string;
    createdAt: string;
}

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState<'products' | 'orders' | 'users'>('products')
    const [products, setProducts] = useState<Product[]>([])
    const [orders, setOrders] = useState<Order[]>([])
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    
    // Product form state
    const [isEditingProduct, setIsEditingProduct] = useState(false)
    const [currentProductId, setCurrentProductId] = useState('')
    const [productName, setProductName] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productImage, setProductImage] = useState('')
    const [productSecondaryImage, setProductSecondaryImage] = useState('')
    const [productSale, setProductSale] = useState('')

    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const storedUser = localStorage.getItem('user')
    const currentUser = storedUser ? JSON.parse(storedUser) : null

    useEffect(() => {
        // Authenticate admin
        if (!token || !currentUser || currentUser.role !== 'admin') {
            setError('Bạn không có quyền truy cập trang này. Vui lòng đăng nhập với tài khoản Quản trị viên.')
            setLoading(false)
            setTimeout(() => {
                navigate('/login')
            }, 3000)
            return
        }

        loadDashboardData()
    }, [token, navigate])

    const loadDashboardData = async () => {
        try {
            setLoading(true)
            setError('')
            
            const headers = { Authorization: `Bearer ${token}` }

            // Fetch products
            const prodRes = await axios.get('http://localhost:5000/api/products')
            setProducts(prodRes.data)

            // Fetch orders
            const orderRes = await axios.get('http://localhost:5000/api/orders', { headers })
            setOrders(orderRes.data)

            // Fetch users
            const userRes = await axios.get('http://localhost:5000/api/users', { headers })
            setUsers(userRes.data)

            setLoading(false)
        } catch (err: any) {
            setError(err.response?.data?.message || 'Có lỗi xảy ra khi đồng bộ dữ liệu hệ thống.')
            setLoading(false)
        }
    }

    // --- Product CRUD Actions ---
    const handleOpenAddProduct = () => {
        setIsEditingProduct(false)
        setCurrentProductId('')
        setProductName('')
        setProductPrice('')
        setProductImage('')
        setProductSecondaryImage('')
        setProductSale('')
        setError('')
        setMessage('')
    }

    const handleOpenEditProduct = (p: Product) => {
        setIsEditingProduct(true)
        setCurrentProductId(p.id)
        setProductName(p.name)
        setProductPrice(p.price.toString())
        setProductImage(p.image)
        setProductSecondaryImage(p.secondaryImage || '')
        setProductSale(p.sale || '')
        setError('')
        setMessage('')
    }

    const handleSaveProduct = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!productName || !productPrice) {
            setError('Vui lòng nhập tên và giá sản phẩm.')
            return
        }

        try {
            const headers = { Authorization: `Bearer ${token}` }
            const payload = {
                name: productName,
                price: parseFloat(productPrice),
                image: productImage || undefined,
                secondaryImage: productSecondaryImage || undefined,
                sale: productSale || undefined
            }

            if (isEditingProduct) {
                const res = await axios.put(`http://localhost:5000/api/products/${currentProductId}`, payload, { headers })
                setMessage(res.data.message)
            } else {
                const res = await axios.post('http://localhost:5000/api/products', payload, { headers })
                setMessage(res.data.message)
            }

            // Reset form and reload
            handleOpenAddProduct()
            const prodRes = await axios.get('http://localhost:5000/api/products')
            setProducts(prodRes.data)
        } catch (err: any) {
            setError(err.response?.data?.message || 'Không thể lưu sản phẩm.')
        }
    }

    const handleDeleteProduct = async (productId: string) => {
        if (!window.confirm('Bạn có chắc chắn muốn xóa sản phẩm này không?')) return
        try {
            const headers = { Authorization: `Bearer ${token}` }
            const res = await axios.delete(`http://localhost:5000/api/products/${productId}`, { headers })
            setMessage(res.data.message)
            
            // Reload products
            const prodRes = await axios.get('http://localhost:5000/api/products')
            setProducts(prodRes.data)
        } catch (err: any) {
            setError(err.response?.data?.message || 'Không thể xóa sản phẩm.')
        }
    }

    // --- Order Actions ---
    const handleUpdateOrderStatus = async (orderId: string, status: string) => {
        try {
            const headers = { Authorization: `Bearer ${token}` }
            const res = await axios.put(`http://localhost:5000/api/orders/${orderId}`, { status }, { headers })
            setMessage(res.data.message)
            
            // Reload orders
            const orderRes = await axios.get('http://localhost:5000/api/orders', { headers })
            setOrders(orderRes.data)
        } catch (err: any) {
            setError(err.response?.data?.message || 'Không thể cập nhật trạng thái đơn hàng.')
        }
    }

    // --- User Actions ---
    const handleUpdateUserRole = async (userId: string, currentRole: string) => {
        if (userId === currentUser.id) {
            alert('Bạn không thể tự thay đổi vai trò của chính mình!')
            return
        }

        const newRole = currentRole === 'admin' ? 'user' : 'admin'
        if (!window.confirm(`Bạn có chắc chắn muốn đổi vai trò user này thành ${newRole.toUpperCase()} không?`)) return

        try {
            const headers = { Authorization: `Bearer ${token}` }
            const res = await axios.put(`http://localhost:5000/api/users/${userId}`, { role: newRole }, { headers })
            setMessage(res.data.message)
            
            // Reload users
            const userRes = await axios.get('http://localhost:5000/api/users', { headers })
            setUsers(userRes.data)
        } catch (err: any) {
            setError(err.response?.data?.message || 'Không thể cập nhật vai trò.')
        }
    }

    const handleDeleteUser = async (userId: string, username: string) => {
        if (userId === currentUser.id) {
            alert('Bạn không thể tự xóa tài khoản của chính mình!')
            return
        }

        if (!window.confirm(`Bạn có chắc chắn muốn xóa tài khoản "${username}" không?`)) return

        try {
            const headers = { Authorization: `Bearer ${token}` }
            const res = await axios.delete(`http://localhost:5000/api/users/${userId}`, { headers })
            setMessage(res.data.message)
            
            // Reload users
            const userRes = await axios.get('http://localhost:5000/api/users', { headers })
            setUsers(userRes.data)
        } catch (err: any) {
            setError(err.response?.data?.message || 'Không thể xóa tài khoản.')
        }
    }

    return (
        <div>
            {/* Page Header */}
            <div className="page-header-wrap bg-img" data-bg="/assets/img/bg/page-header-bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="page-header-content">
                                <div className="page-header-content-inner">
                                    <h1>Hệ Thống Quản Trị</h1>
                                    <ul className="breadcrumb">
                                        <li><Link to="/">Trang Chủ</Link></li>
                                        <li className="current">Dashboard</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dashboard Content */}
            <div className="page-content-wrapper sp-y">
                <div className="container container-wide">
                    <div className="row">
                        {/* Tab Buttons */}
                        <div className="col-md-3 mb-4">
                            <div className="list-group" style={{ boxShadow: '0 5px 15px rgba(0,0,0,0.05)', borderRadius: '6px' }}>
                                <button 
                                    onClick={() => { setActiveTab('products'); setError(''); setMessage(''); }}
                                    className={`list-group-item list-group-item-action ${activeTab === 'products' ? 'active' : ''}`}
                                    style={activeTab === 'products' ? { backgroundColor: '#1b1b1c', borderColor: '#1b1b1c', color: '#eeb644', fontWeight: 'bold' } : { color: '#1b1b1c' }}
                                >
                                    <i className="fa fa-cubes mr-2" style={{ marginRight: '10px' }} /> Quản Lý Sản Phẩm
                                </button>
                                <button 
                                    onClick={() => { setActiveTab('orders'); setError(''); setMessage(''); }}
                                    className={`list-group-item list-group-item-action ${activeTab === 'orders' ? 'active' : ''}`}
                                    style={activeTab === 'orders' ? { backgroundColor: '#1b1b1c', borderColor: '#1b1b1c', color: '#eeb644', fontWeight: 'bold' } : { color: '#1b1b1c' }}
                                >
                                    <i className="fa fa-shopping-cart mr-2" style={{ marginRight: '10px' }} /> Quản Lý Đơn Hàng
                                </button>
                                <button 
                                    onClick={() => { setActiveTab('users'); setError(''); setMessage(''); }}
                                    className={`list-group-item list-group-item-action ${activeTab === 'users' ? 'active' : ''}`}
                                    style={activeTab === 'users' ? { backgroundColor: '#1b1b1c', borderColor: '#1b1b1c', color: '#eeb644', fontWeight: 'bold' } : { color: '#1b1b1c' }}
                                >
                                    <i className="fa fa-users mr-2" style={{ marginRight: '10px' }} /> Quản Lý Thành Viên
                                </button>
                            </div>
                        </div>

                        {/* Tab Content Panels */}
                        <div className="col-md-9">
                            <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                                {error && <div className="alert alert-danger text-center">{error}</div>}
                                {message && <div className="alert alert-success text-center">{message}</div>}

                                {loading ? (
                                    <div className="text-center py-5">
                                        <div className="spinner-border text-warning" role="status">
                                            <span className="sr-only">Đang tải...</span>
                                        </div>
                                        <p style={{ marginTop: '10px' }}>Đang nạp dữ liệu hệ thống...</p>
                                    </div>
                                ) : (
                                    <>
                                        {/* 1. Products Tab */}
                                        {activeTab === 'products' && (
                                            <div>
                                                <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap" style={{ gap: '15px', borderBottom: '2px solid #f4f3ec', paddingBottom: '15px' }}>
                                                    <h3 style={{ margin: 0, fontWeight: 700 }}>Danh Mục Sản Phẩm</h3>
                                                    <button 
                                                        onClick={handleOpenAddProduct} 
                                                        className="btn btn-dark btn-sm"
                                                        style={{ backgroundColor: '#eeb644', borderColor: '#eeb644', color: '#1b1b1c', fontWeight: 'bold' }}
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#productFormCollapse"
                                                    >
                                                        + Thêm Sản Phẩm Mới
                                                    </button>
                                                </div>

                                                {/* Add/Edit Product Collapse Form */}
                                                <div className="collapse mb-4" id="productFormCollapse" style={{ border: '1px solid #f4f3ec', padding: '20px', borderRadius: '6px', backgroundColor: '#fcfbf7' }}>
                                                    <h4 style={{ fontWeight: 'bold', marginBottom: '15px' }}>{isEditingProduct ? 'Chỉnh Sửa Sản Phẩm' : 'Thêm Sản Phẩm Mới'}</h4>
                                                    <form onSubmit={handleSaveProduct}>
                                                        <div className="row">
                                                            <div className="col-md-6 mb-3">
                                                                <label className="form-label" style={{ fontWeight: 'bold' }}>Tên Sản Phẩm *</label>
                                                                <input type="text" className="form-control" value={productName} onChange={(e) => setProductName(e.target.value)} required />
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <label className="form-label" style={{ fontWeight: 'bold' }}>Giá bán ($) *</label>
                                                                <input type="number" step="0.01" className="form-control" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} required />
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <label className="form-label" style={{ fontWeight: 'bold' }}>Đường dẫn ảnh chính</label>
                                                                <input type="text" className="form-control" placeholder="Ví dụ: /assets/img/product/product-2.png" value={productImage} onChange={(e) => setProductImage(e.target.value)} />
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <label className="form-label" style={{ fontWeight: 'bold' }}>Đường dẫn ảnh phụ</label>
                                                                <input type="text" className="form-control" placeholder="Ví dụ: /assets/img/product/product-3.png" value={productSecondaryImage} onChange={(e) => setProductSecondaryImage(e.target.value)} />
                                                            </div>
                                                            <div className="col-md-6 mb-3">
                                                                <label className="form-label" style={{ fontWeight: 'bold' }}>Phần trăm giảm giá (nếu có)</label>
                                                                <input type="text" className="form-control" placeholder="Ví dụ: 25%" value={productSale} onChange={(e) => setProductSale(e.target.value)} />
                                                            </div>
                                                        </div>
                                                        <div className="d-flex justify-content-end" style={{ gap: '10px' }}>
                                                            <button type="button" className="btn btn-secondary btn-sm" data-bs-toggle="collapse" data-bs-target="#productFormCollapse">Hủy</button>
                                                            <button type="submit" className="btn btn-dark btn-sm" style={{ backgroundColor: '#1b1b1c', color: '#eeb644', fontWeight: 'bold' }}>Lưu Sản Phẩm</button>
                                                        </div>
                                                    </form>
                                                </div>

                                                {/* Product List Table */}
                                                <div className="table-responsive">
                                                    <table className="table table-bordered table-striped table-hover align-middle text-center">
                                                        <thead className="table-dark" style={{ backgroundColor: '#1b1b1c', color: '#fff' }}>
                                                            <tr>
                                                                <th>Ảnh</th>
                                                                <th>Tên Sản Phẩm</th>
                                                                <th>Giá Cả</th>
                                                                <th>Khuyến Mãi</th>
                                                                <th>Hành Động</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {products.map(p => (
                                                                <tr key={p.id}>
                                                                    <td>
                                                                        <img src={p.image} alt={p.name} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                                                                    </td>
                                                                    <td style={{ fontWeight: '600', textAlign: 'left' }}>{p.name}</td>
                                                                    <td>${p.price.toFixed(2)}</td>
                                                                    <td>
                                                                        {p.sale ? (
                                                                            <span className="badge bg-danger text-white">{p.sale}</span>
                                                                        ) : (
                                                                            <span className="text-muted">-</span>
                                                                        )}
                                                                    </td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-center" style={{ gap: '10px' }}>
                                                                            <button 
                                                                                onClick={() => handleOpenEditProduct(p)} 
                                                                                className="btn btn-sm btn-outline-warning"
                                                                                style={{ borderColor: '#eeb644', color: '#1b1b1c', fontWeight: 'bold' }}
                                                                                data-bs-toggle="collapse"
                                                                                data-bs-target="#productFormCollapse"
                                                                            >
                                                                                Sửa
                                                                            </button>
                                                                            <button 
                                                                                onClick={() => handleDeleteProduct(p.id)} 
                                                                                className="btn btn-sm btn-outline-danger"
                                                                                style={{ fontWeight: 'bold' }}
                                                                            >
                                                                                Xóa
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                            {products.length === 0 && (
                                                                <tr>
                                                                    <td colSpan={5} className="text-center py-4">Chưa có sản phẩm nào.</td>
                                                                </tr>
                                                            )}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        )}

                                        {/* 2. Orders Tab */}
                                        {activeTab === 'orders' && (
                                            <div>
                                                <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap" style={{ gap: '15px', borderBottom: '2px solid #f4f3ec', paddingBottom: '15px' }}>
                                                    <h3 style={{ margin: 0, fontWeight: 700 }}>Danh Sách Đơn Hàng</h3>
                                                </div>

                                                <div className="table-responsive">
                                                    <table className="table table-bordered table-striped table-hover align-middle text-center">
                                                        <thead className="table-dark" style={{ backgroundColor: '#1b1b1c', color: '#fff' }}>
                                                            <tr>
                                                                <th>Mã Đơn</th>
                                                                <th>Khách Hàng</th>
                                                                <th>Chi Tiết</th>
                                                                <th>Tổng Tiền</th>
                                                                <th>Trạng Thái</th>
                                                                <th>Ngày Đặt</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {orders.map(o => (
                                                                <tr key={o.id}>
                                                                    <td style={{ fontWeight: 'bold', color: '#eeb644' }}>{o.id}</td>
                                                                    <td style={{ textAlign: 'left' }}>
                                                                        <div style={{ fontWeight: '600' }}>{o.customerName}</div>
                                                                        <div style={{ fontSize: '12px', color: '#666' }}><i className="fa fa-phone" /> {o.phone}</div>
                                                                        <div style={{ fontSize: '11px', color: '#888' }}><i className="fa fa-map-marker" /> {o.address}</div>
                                                                    </td>
                                                                    <td style={{ textAlign: 'left', maxWidth: '300px' }}>
                                                                        <ul style={{ margin: 0, paddingLeft: '15px', fontSize: '13px' }}>
                                                                            {o.items.map((item, idx) => (
                                                                                <li key={idx}>
                                                                                    {item.name} <strong style={{ color: '#eeb644' }}>x{item.quantity}</strong> (${item.price})
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                        {o.note && (
                                                                            <div style={{ marginTop: '5px', fontSize: '11px', color: '#f0ad4e', fontStyle: 'italic' }}>
                                                                                * Note: {o.note}
                                                                            </div>
                                                                        )}
                                                                    </td>
                                                                    <td style={{ fontWeight: 'bold' }}>${o.total.toFixed(2)}</td>
                                                                    <td>
                                                                        <select 
                                                                            value={o.status} 
                                                                            onChange={(e) => handleUpdateOrderStatus(o.id, e.target.value)}
                                                                            className="form-select form-select-sm"
                                                                            style={{ 
                                                                                fontSize: '13px', 
                                                                                fontWeight: 'bold',
                                                                                color: o.status === 'Đã hoàn thành' ? 'green' : o.status === 'Đã hủy' ? 'red' : o.status === 'Đang giao' ? 'blue' : 'orange'
                                                                            }}
                                                                        >
                                                                            <option value="Chờ xử lý">Chờ xử lý</option>
                                                                            <option value="Đang giao">Đang giao</option>
                                                                            <option value="Đã hoàn thành">Đã hoàn thành</option>
                                                                            <option value="Đã hủy">Đã hủy</option>
                                                                        </select>
                                                                    </td>
                                                                    <td>{new Date(o.createdAt).toLocaleDateString('vi-VN')}</td>
                                                                </tr>
                                                            ))}
                                                            {orders.length === 0 && (
                                                                <tr>
                                                                    <td colSpan={6} className="text-center py-4">Chưa có đơn hàng nào được đặt.</td>
                                                                </tr>
                                                            )}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        )}

                                        {/* 3. Users Tab */}
                                        {activeTab === 'users' && (
                                            <div>
                                                <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap" style={{ gap: '15px', borderBottom: '2px solid #f4f3ec', paddingBottom: '15px' }}>
                                                    <h3 style={{ margin: 0, fontWeight: 700 }}>Thành Viên Hệ Thống</h3>
                                                </div>

                                                <div className="table-responsive">
                                                    <table className="table table-bordered table-striped table-hover align-middle text-center">
                                                        <thead className="table-dark" style={{ backgroundColor: '#1b1b1c', color: '#fff' }}>
                                                            <tr>
                                                                <th>ID</th>
                                                                <th>Tên Đăng Nhập</th>
                                                                <th>Email</th>
                                                                <th>Vai Trò</th>
                                                                <th>Ngày Tạo</th>
                                                                <th>Hành Động</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {users.map(u => (
                                                                <tr key={u.id}>
                                                                    <td>{u.id}</td>
                                                                    <td style={{ fontWeight: 600 }}>{u.username}</td>
                                                                    <td>{u.email}</td>
                                                                    <td>
                                                                        <span 
                                                                            className={`badge ${u.role === 'admin' ? 'bg-danger text-white' : 'bg-secondary text-white'}`}
                                                                            style={{ padding: '6px 12px', fontSize: '11px', borderRadius: '4px' }}
                                                                        >
                                                                            {u.role.toUpperCase()}
                                                                        </span>
                                                                    </td>
                                                                    <td>{new Date(u.createdAt).toLocaleDateString('vi-VN')}</td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-center" style={{ gap: '10px' }}>
                                                                            <button 
                                                                                onClick={() => handleUpdateUserRole(u.id, u.role)}
                                                                                disabled={u.id === currentUser?.id}
                                                                                className="btn btn-sm btn-outline-warning"
                                                                                style={{ borderColor: '#eeb644', color: '#1b1b1c', fontWeight: 'bold' }}
                                                                            >
                                                                                Đổi Vai Trò
                                                                            </button>
                                                                            <button 
                                                                                onClick={() => handleDeleteUser(u.id, u.username)}
                                                                                disabled={u.id === currentUser?.id}
                                                                                className="btn btn-sm btn-outline-danger"
                                                                                style={{ fontWeight: 'bold' }}
                                                                            >
                                                                                Xóa
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard
