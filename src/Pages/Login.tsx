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
              <h1>Login</h1>
              <ul className="breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li><a href="shop.html">Pages</a></li>
                <li className="current"><a href="#">Login</a></li>
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
                <input type="text" name="user-name" placeholder="Username" />
                <input type="password" name="user-password" placeholder="Password" />
                <div className="login-toggle-btn">
                  <input id="login-check" type="checkbox" />
                  <label htmlFor="login-check">Remember me</label>
                  <a href="#">Forgot Password?</a>
                </div>
                <div className="login-btn">
                  <button type="submit">Login</button>
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