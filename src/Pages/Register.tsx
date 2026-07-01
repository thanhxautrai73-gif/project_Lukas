import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const navigate = useNavigate()

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setSuccess('')

        if (!username || !email || !password) {
            setError('Vui lòng nhập đầy đủ thông tin!')
            return
        }

        try {
            const response = await axios.post('http://localhost:5000/api/register', {
                username,
                email,
                password
            })
            setSuccess(response.data.message)
            setTimeout(() => {
                navigate('/login')
            }, 1500)
        } catch (err: any) {
            setError(err.response?.data?.message || 'Đăng ký thất bại. Vui lòng thử lại!')
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
                                    <h1>Đăng Ký</h1>
                                    <ul className="breadcrumb">
                                        <li><Link to="/">Trang Chủ</Link></li>
                                        <li><Link to="/pages">Trang</Link></li>
                                        <li className="current">Đăng Ký</li>
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
                                    <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Tạo Tài Khoản Mới</h3>
                                    {error && <div className="alert alert-danger" style={{ textAlign: 'center' }}>{error}</div>}
                                    {success && <div className="alert alert-success" style={{ textAlign: 'center' }}>{success}</div>}
                                    
                                    <form onSubmit={handleRegister}>
                                        <input 
                                            type="text" 
                                            placeholder="Tên đăng nhập" 
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            required
                                        />
                                        <input 
                                            placeholder="Email" 
                                            type="email" 
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
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
                                            <input id="register-check" type="checkbox" />
                                            <label htmlFor="register-check">Ghi nhớ tôi</label>
                                            <a href="#">Quên mật khẩu?</a>
                                        </div>
                                        <div className="login-btn">
                                            <button type="submit">Đăng Ký</button>
                                        </div>
                                        <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                            Đã có tài khoản? <Link to="/login" style={{ color: '#eeb644', fontWeight: 'bold' }}>Đăng nhập ngay</Link>
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

export default Register