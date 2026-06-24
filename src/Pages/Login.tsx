import { Link } from 'react-router-dom'

const login = () => {
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
              <form action="#" method="post">
                <input type="text" name="user-name" placeholder="Tên đăng nhập" />
                <input type="password" name="user-password" placeholder="Mật khẩu" />
                <div className="login-toggle-btn">
                  <input id="login-check" type="checkbox" />
                  <label htmlFor="login-check">Ghi nhớ tôi</label>
                  <a href="#">Quên mật khẩu?</a>
                </div>
                <div className="login-btn">
                  <button type="submit">Đăng Nhập</button>
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

export default login;