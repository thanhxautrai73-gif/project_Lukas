import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
  {/*== Start Page Header Area ==*/}
  <div className="page-header-wrap bg-img" data-bg="assets/img/bg/page-header-bg.jpg">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <div className="page-header-content">
            <div className="page-header-content-inner">
              <h1>Giới Thiệu</h1>
              <ul className="breadcrumb">
                <li><Link to="/">Trang Chủ</Link></li>
                <li className="current"><Link to="/about">Giới Thiệu</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*== End Page Header Area ==*/}
  {/*== Start Page Content Wrapper ==*/}
  <div className="page-content-wrapper sm-top">
    <div className="about-page-content">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 order-1 order-md-0">
            <div className="about-content">
              <h2 className="h3 mb-sm-20">Về Lukas</h2>
              <p>Đây là danh sách các phụ tùng ô tô chủ yếu dành cho các loại xe sử dụng động cơ đốt trong, là các thành phần được sản xuất của ô tô.</p>
              <p>Danh mục này dành cho các thành phần và bộ phận cấu tạo nên thân xe ô tô bao gồm cả phụ kiện.</p>
              <p>Trên xe máy, chức năng chính của chúng là bảo vệ người lái khỏi gió, mặc dù không hoàn toàn như trong ô tô, trong khi trên xe máy thể thao và đua, chức năng chính là giảm lực cản khi người lái vận hành.</p>
            </div>
          </div>
          <div className="col-lg-6 order-0">
            <div className="about-thumb mb-sm-30">
              <img src="assets/img/banner/a-1.jpg" alt="About" />
            </div>
          </div>
        </div>
        <div className="row align-items-center sm-top">
          <div className="col-lg-6">
            <div className="about-thumb video-play mb-sm-30">
              <img src="assets/img/banner/a-2.jpg" alt="About" />
              <a href="https://www.youtube.com/watch?=17&v=S-UcVwzrAqo" className="btn-video-popup"><i className="ion-play" /></a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-content">
              <h2 className="h3">Sứ mệnh của chúng tôi</h2>
              <p>Đây là danh sách các phụ tùng ô tô chủ yếu dành cho các loại xe sử dụng động cơ đốt trong, là các thành phần được sản xuất của ô tô.</p>
              <p>Danh mục này dành cho các thành phần và bộ phận cấu tạo nên thân xe ô tô bao gồm cả phụ kiện.</p>
              <p>Trên xe máy, chức năng chính của chúng là bảo vệ người lái khỏi gió, mặc dù không hoàn toàn như trong ô tô, trong khi trên xe máy thể thao và đua, chức năng chính là giảm lực cản khi người lái vận hành.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*== End Page Content Wrapper ==*/}
  {/*== Start Call to action Wrapper ==*/}
  <div className="call-to-action-area sm-top">
    <div className="call-to-action-content-area home-2 bg-img" data-bg="assets/img/bg/bg-1.jpg">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="call-to-action-txt">
              <h2>TẤT CẢ PHỤ TÙNG BẠN CẦN <br /> ĐỀU CÓ THỂ TÌM THẤY TẠI ĐÂY</h2>
              <Link to="/shop" className="btn btn-brand">Mua Ngay</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="call-to-action-image-area">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <img src="assets/img/bg/bg-car.png" alt="Car" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*== End Call to action Wrapper ==*/}
  {/*== Start Newsletter Area ==*/}
  <div className="newsletter-area-wrapper sp-lg-top sp-md-top mt-0">
    <div className="container container-wide">
      <div className="newsletter-area-inner bg-img" data-bg="assets/img/bg/newsletter-bg-2.jpg">
        <div className="row">
          <div className="col-lg-8 col-xl-5 offset-lg-3 offset-xl-6">
            <div className="newsletter-content text-center">
              <h4>ƯU ĐÃI <span>ĐẶC BIỆT</span> KHI ĐĂNG KÝ</h4>
              <h2>NHẬN GIẢM GIÁ TỨC THÌ CHO THÀNH VIÊN</h2>
              <p>Đăng ký nhận bản tin để cập nhật những sản phẩm, <br />khuyến mãi và ưu đãi mới nhất từ chúng tôi.
              </p>
              <div className="newsletter-form-wrap">
                <form action="#" method="post">
                  <div className="form-content">
                    <input type="email" placeholder="Nhập email của bạn tại đây" />
                    <button className="btn-newsletter">Gửi</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*== End Newsletter Area ==*/}
  {/*== Start Brand Logo Area Wrapper ==*/}
  <div className="brand-logo-area sm-top">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="brand-logo-content">
            <div className="brand-logo-item">
              <a href="#"><img src="assets/img/brand-logo/brand-1.png" alt="Logo" /></a>
            </div>
            <div className="brand-logo-item">
              <a href="#"><img src="assets/img/brand-logo/brand-2.png" alt="Logo" /></a>
            </div>
            <div className="brand-logo-item">
              <a href="#"><img src="assets/img/brand-logo/brand-3.png" alt="Logo" /></a>
            </div>
            <div className="brand-logo-item">
              <a href="#"><img src="assets/img/brand-logo/brand-4.png" alt="Logo" /></a>
            </div>
            <div className="brand-logo-item">
              <a href="#"><img src="assets/img/brand-logo/brand-5.png" alt="Logo" /></a>
            </div>
            <div className="brand-logo-item">
              <a href="#"><img src="assets/img/brand-logo/brand-3.png" alt="Logo" /></a>
            </div>
            <div className="brand-logo-item">
              <a href="#"><img src="assets/img/brand-logo/brand-1.png" alt="Logo" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*== End Brand Logo Area Wrapper ==*/}
  {/*== Start Need Help area ==*/}
  <div className="need-help-area bg-img sm-top" data-bg="assets/img/bg/bg-2.jpg">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-sm-7 text-center text-sm-start">
          <div className="need-help-content mb-sm-20">
            <h3>Bạn cần trợ giúp ?</h3>
            <p>Gọi hỗ trợ 24/7 của chúng tôi tại số 01234-567-890</p>
          </div>
        </div>
        <div className="col-sm-5 text-center text-sm-end">
          <Link to="/contact" className="btn btn-black">Liên Hệ Ngay</Link>
        </div>
      </div>
    </div>
  </div>
  {/*== End Need Help area ==*/}
</div>

    )
}
export default About;