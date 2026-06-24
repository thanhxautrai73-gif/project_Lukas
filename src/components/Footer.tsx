const Footer = () => {
    return (
     
<footer className="footer-area">
  <div className="footer-widget-area">
    <div className="container container-wide">
      <div className="row mtn-40">
        <div className="col-lg-3">
          <div className="widget-item">
            <div className="about-widget">
              <a href="index.html"><img src="/assets/img/logo-light.png" alt="Logo" /></a>
              <p>Lukas là cửa hàng phụ tùng tốt nhất cho các phụ kiện xe hơi của bạn. Bất kể loại phụ tùng nào bạn cần, bạn đều có thể tìm thấy tại đây.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-2">
          <div className="widget-item">
            <h4 className="widget-title">Thông Tin</h4>
            <div className="widget-body">
              <ul className="widget-list">
                <li><a href="#">Công ty của chúng tôi</a></li>
                <li><a href="#">Liên hệ với chúng tôi</a></li>
                <li><a href="#">Dịch vụ của chúng tôi</a></li>
                <li><a href="#">Tại sao chọn chúng tôi?</a></li>
                <li><a href="#">Nghề nghiệp</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-2">
          <div className="widget-item">
            <h4 className="widget-title">Liên Kết Nhanh</h4>
            <div className="widget-body">
              <ul className="widget-list">
                <li><a href="#">Giới Thiệu</a></li>
                <li><a href="#">Tin Tức</a></li>
                <li><a href="#">Cửa Hàng</a></li>
                <li><a href="#">Giỏ Hàng</a></li>
                <li><a href="#">Liên Hệ</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-2">
          <div className="widget-item">
            <h4 className="widget-title">Hỗ Trợ</h4>
            <div className="widget-body">
              <ul className="widget-list">
                <li><a href="#">Tin Tức</a></li>
                <li><a href="#">Liên Hệ</a></li>
                <li><a href="#">Chính sách đổi trả</a></li>
                <li><a href="#">Hỗ trợ trực tuyến</a></li>
                <li><a href="#">Hoàn tiền</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-lg-3">
          <div className="widget-item">
            <h4 className="widget-title">Thông Tin Cửa Hàng</h4>
            <div className="widget-body">
              <address>
                Số 123 Đường ABC, Quận XYZ, Hà Nội, Việt Nam <br />
                https://example.com <br />
                (+84) 123 456 789
              </address>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-copyright-area">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <div className="copyright-content">
            <p>
              © Lukas,
              .
              Được thực hiện với <i className="fa fa-heart text-danger" /> bởi
              <a href="http://hasthemes.com/" target="_blank">HasThemes</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    )
}
export default Footer;