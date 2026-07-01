import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setSuccess('')

        if (!username || !password) {
            setError('Vui lòng nhập đầy đủ thông tin!')
            return
        }

        try {
            const response = await axios.post('/api/login', {
                username,
                password
            })
            
            setSuccess(response.data.message)
            
            // Save token and user details in local storage
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('user', JSON.stringify(response.data.user))
            
            // Dispatch storage event so other components (like Header) can update immediately
            window.dispatchEvent(new Event('storage'))

            setTimeout(() => {
                navigate('/')
            }, 1000)
        } catch (err: any) {
            setError(err.response?.data?.message || 'Đăng nhập thất bại. Vui lòng kiểm tra lại!')
        }
    }

    return (
        <div>
            {/*== Start Page Header Area ==*/}
            <div className="page-header-wrap bg-img" data-bg="assets/img/bg/page-header-bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="page-header-content">
                                <div className="page-header-content-inner">
                                    <h1>Đăng Nhập</h1>
                                    <ul className="breadcrumb">
                                        <li><Link to="/">Trang Chủ</Link></li>
                                        <li><Link to="/pages">Trang</Link></li>
                                        <li className="current">Đăng Nhập</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*== End Page Header Area ==*/}
            {/*== Start Page Content Wrapper ==*/}
            <div className="page-content-wrapper sp-y">
                <div className="login-page-content-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12 ml-auto mr-auto">
                                <div className="login-form-style">
                                    <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Đăng Nhập Vào Hệ Thống</h3>
                                    {error && <div className="alert alert-danger" style={{ textAlign: 'center' }}>{error}</div>}
                                    {success && <div className="alert alert-success" style={{ textAlign: 'center' }}>{success}</div>}

                                    <form onSubmit={handleLogin}>
                                        <input 
                                            type="text" 
                                            placeholder="Tên đăng nhập" 
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                        />
                                        <input 
                                            type="password" 
                                            placeholder="Mật khẩu" 
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />
                                        <div className="login-toggle-btn">
                                            <input id="login-check" type="checkbox" />
                                            <label htmlFor="login-check">Ghi nhớ tôi</label>
                                            <a href="#">Quên mật khẩu?</a>
                                        </div>
                                        <div className="login-btn">
                                            <button type="submit">Đăng Nhập</button>
                                        </div>
                                        <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                            Chưa có tài khoản? <Link to="/register" style={{ color: '#eeb644', fontWeight: 'bold' }}>Đăng ký ngay</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*== End Page Content Wrapper ==*/}
        </div>
    )
}

export default Login