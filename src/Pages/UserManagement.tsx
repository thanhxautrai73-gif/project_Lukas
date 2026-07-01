import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

interface User {
    id: string;
    username: string;
    email: string;
    role: string;
    createdAt: string;
}

const UserManagement = () => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const navigate = useNavigate()

    const token = localStorage.getItem('token')
    const storedUser = localStorage.getItem('user')
    const currentUser = storedUser ? JSON.parse(storedUser) : null

    useEffect(() => {
        // Auth check
        if (!token || !currentUser || currentUser.role !== 'admin') {
            setError('Bạn không có quyền truy cập trang này. Vui lòng đăng nhập bằng tài khoản Quản trị viên.')
            setLoading(false)
            setTimeout(() => {
                navigate('/login')
            }, 3000)
            return
        }

        fetchUsers()
    }, [token, navigate])

    const fetchUsers = async () => {
        try {
            setLoading(true)
            const response = await axios.get('/api/users', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setUsers(response.data)
            setLoading(false)
        } catch (err: any) {
            setError(err.response?.data?.message || 'Lỗi tải danh sách tài khoản.')
            setLoading(false)
        }
    }

    const handleUpdateRole = async (userId: string, currentRole: string) => {
        if (userId === currentUser.id) {
            alert('Bạn không thể tự thay đổi vai trò của chính mình!')
            return
        }

        const newRole = currentRole === 'admin' ? 'user' : 'admin'
        const confirmChange = window.confirm(`Bạn có chắc chắn muốn đổi vai trò của user này thành ${newRole.toUpperCase()} không?`)
        if (!confirmChange) return

        try {
            setError('')
            setMessage('')
            const response = await axios.put(`/api/users/${userId}`, 
                { role: newRole },
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            )
            setMessage(response.data.message)
            fetchUsers()
        } catch (err: any) {
            setError(err.response?.data?.message || 'Không thể cập nhật vai trò.')
        }
    }

    const handleDeleteUser = async (userId: string, username: string) => {
        if (userId === currentUser.id) {
            alert('Bạn không thể tự xóa tài khoản của chính mình!')
            return
        }

        const confirmDelete = window.confirm(`Cảnh báo! Bạn có chắc chắn muốn xóa tài khoản "${username}" không? Hành động này không thể hoàn tác.`)
        if (!confirmDelete) return

        try {
            setError('')
            setMessage('')
            const response = await axios.delete(`/api/users/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setMessage(response.data.message)
            fetchUsers()
        } catch (err: any) {
            setError(err.response?.data?.message || 'Không thể xóa tài khoản.')
        }
    }

    return (
        <div>
            {/*== Start Page Header Area ==*/}
            <div className="page-header-wrap bg-img" data-bg="/assets/img/bg/page-header-bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="page-header-content">
                                <div className="page-header-content-inner">
                                    <h1>Quản Lý User</h1>
                                    <ul className="breadcrumb">
                                        <li><Link to="/">Trang Chủ</Link></li>
                                        <li><Link to="/pages">Trang</Link></li>
                                        <li className="current">Quản Lý User</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*== End Page Header Area ==*/}

            {/*== Start User List Area ==*/}
            <div className="page-content-wrapper sp-y">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)' }}>
                                <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap" style={{ gap: '15px', borderBottom: '2px solid #f4f3ec', paddingBottom: '15px' }}>
                                    <h3 style={{ margin: 0, fontWeight: 700 }}>Danh Sách Thành Viên</h3>
                                    <span className="badge badge-dark" style={{ fontSize: '14px', padding: '8px 12px', backgroundColor: '#1b1b1c' }}>
                                        Tổng số: {users.length} tài khoản
                                    </span>
                                </div>

                                {error && <div className="alert alert-danger text-center">{error}</div>}
                                {message && <div className="alert alert-success text-center">{message}</div>}

                                {loading ? (
                                    <div className="text-center py-5">
                                        <div className="spinner-border text-warning" role="status">
                                            <span className="sr-only">Đang tải...</span>
                                        </div>
                                        <p style={{ marginTop: '10px' }}>Đang tải danh sách thành viên...</p>
                                    </div>
                                ) : (
                                    <div className="table-responsive">
                                        <table className="table table-bordered table-striped table-hover align-middle text-center" style={{ minWidth: '800px' }}>
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
                                                {users.map((u) => (
                                                    <tr key={u.id} style={{ height: '60px' }}>
                                                        <td>{u.id}</td>
                                                        <td style={{ fontWeight: 600 }}>{u.username}</td>
                                                        <td>{u.email}</td>
                                                        <td>
                                                            <span 
                                                                className={`badge ${u.role === 'admin' ? 'bg-danger text-white' : 'bg-secondary text-white'}`} 
                                                                style={{ padding: '6px 12px', fontSize: '12px', borderRadius: '4px' }}
                                                            >
                                                                {u.role.toUpperCase()}
                                                            </span>
                                                        </td>
                                                        <td>{new Date(u.createdAt).toLocaleDateString('vi-VN')}</td>
                                                        <td>
                                                            <div className="d-flex justify-content-center" style={{ gap: '10px' }}>
                                                                <button
                                                                    onClick={() => handleUpdateRole(u.id, u.role)}
                                                                    disabled={u.id === currentUser?.id}
                                                                    className="btn btn-sm btn-outline-warning"
                                                                    style={{ 
                                                                        padding: '6px 12px', 
                                                                        fontSize: '13px', 
                                                                        borderColor: '#eeb644', 
                                                                        color: '#1b1b1c',
                                                                        backgroundColor: 'transparent',
                                                                        fontWeight: 'bold',
                                                                        borderRadius: '4px'
                                                                    }}
                                                                >
                                                                    Đổi Vai Trò
                                                                </button>
                                                                <button
                                                                    onClick={() => handleDeleteUser(u.id, u.username)}
                                                                    disabled={u.id === currentUser?.id}
                                                                    className="btn btn-sm btn-outline-danger"
                                                                    style={{ 
                                                                        padding: '6px 12px', 
                                                                        fontSize: '13px', 
                                                                        borderRadius: '4px',
                                                                        fontWeight: 'bold'
                                                                    }}
                                                                >
                                                                    Xóa
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                                {users.length === 0 && !error && (
                                                    <tr>
                                                        <td colSpan={6} className="text-center py-4">Không tìm thấy người dùng nào.</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*== End User List Area ==*/}
        </div>
    )
}

export default UserManagement
