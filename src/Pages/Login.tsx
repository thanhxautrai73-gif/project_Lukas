import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    if (!username || !password) {
      setError('Vui lòng điền đầy đủ tên đăng nhập và mật khẩu.')
      setLoading(false)
      return
    }

    const res = await login(username, password)
    if (res.success) {
      setSuccess(res.message)
      setTimeout(() => {
        navigate('/')
      }, 1500)
    } else {
      setError(res.message)
    }
    setLoading(false)
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
                  <form onSubmit={handleSubmit}>
                    {error && (
                      <div className="alert alert-danger" style={{ color: '#721c24', backgroundColor: '#f8d7da', borderColor: '#f5c6cb', padding: '10px 15px', borderRadius: '4px', marginBottom: '15px' }}>
                        {error}
                      </div>
                    )}
                    {success && (
                      <div className="alert alert-success" style={{ color: '#155724', backgroundColor: '#d4edda', borderColor: '#c3e6cb', padding: '10px 15px', borderRadius: '4px', marginBottom: '15px' }}>
                        {success}
                      </div>
                    )}
                    <input 
                      type="text" 
                      placeholder="Tên đăng nhập hoặc Email" 
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
                      <button type="submit" disabled={loading}>
                        {loading ? 'Đang Đăng Nhập...' : 'Đăng Nhập'}
                      </button>
                    </div>
                  </form>
                  <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    Chưa có tài khoản? <Link to="/register" style={{ color: '#eeb644' }}>Đăng ký ngay</Link>
                  </div>
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

export default Login;