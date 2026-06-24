import { useState } from 'react'
import { Link } from 'react-router-dom'

const Pages = () => {
    const [activeSlide] = useState(0)

    return (
        <div>
  
        <div className="slider-area-wrapper">
          <div className="slider-content-active">
            <div className={`slider-slide-item bg-img ${activeSlide === 0 ? 'active' : ''}`} style={{ backgroundImage: "url('/assets/img/slider/slider-1.jpg')" }}>
              <div className="container container-wide h-100">
                <div className="row align-items-center h-100">
                  <div className="col-lg-6">
                    <div className="slide-content">
                      <div className="slide-content-inner">
                        <h3>CÔNG NGHỆ & THIẾT KẾ MỚI</h3>
                        <h2>BỘ SƯU TẬP BÁNH XE & LỐP XE</h2>
                        <Link className="btn btn-white" to="/shop">Mua Ngay</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`slider-slide-item bg-img ${activeSlide === 1 ? 'active' : ''}`} style={{ backgroundImage: "url('/assets/img/slider/slider-2.jpg')" }}>
              <div className="container container-wide h-100">
                <div className="row align-items-center h-100">
                  <div className="col-12">
                    <div className="slide-content">
                      <div className="slide-content-inner">
                        <h3>CÔNG NGHỆ & THIẾT KẾ MỚI</h3>
                        <h2>BỘ SƯU TẬP <br /> BÁNH XE & LỐP XE</h2>
                        <Link className="btn btn-white" to="/shop">Mua Ngay</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*== End Slider Area Wrapper ==*/}
        {/*== Start Banner Area Wrapper ==*/}
        <div className="banner-area-wrapper banner-mt">
          <div className="container container-wide">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="banner-item">
                  <div className="banner-item__img">
                    <Link to="/shop"><img src="/assets/img/banner/banner-1.jpg" alt="Banner" /></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="banner-item">
                  <div className="banner-item__img">
                    <Link to="/shop"><img src="/assets/img/banner/banner-2.jpg" alt="Banner" /></Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="banner-item">
                  <div className="banner-item__img">
                    <Link to="/shop"><img src="/assets/img/banner/banner-3.jpg" alt="Banner" /></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*== End Banner Area Wrapper ==*/}
        {/*== Start Call to Action Area ==*/}
        <div className="call-to-action-area sm-top">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-lg-4">
                <div className="call-to-action-item mt-0">
                  <div className="call-to-action-item__icon">
                    <img src="/assets/img/icons/icon-1.png" alt="fast delivery" />
                  </div>
                  <div className="call-to-action-item__info">
                    <h3>Giao Hàng Miễn Phí</h3>
                    <p>Giao hàng tận nhà miễn phí cho đơn hàng trên $100</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="call-to-action-item">
                  <div className="call-to-action-item__icon">
                    <img src="/assets/img/icons/icon-2.png" alt="quality" />
                  </div>
                  <div className="call-to-action-item__info">
                    <h3>Sản Phẩm Chất Lượng</h3>
                    <p>Chúng tôi luôn đảm bảo chất lượng sản phẩm</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-4">
                <div className="call-to-action-item">
                  <div className="call-to-action-item__icon">
                    <img src="/assets/img/icons/icon-3.png" alt="return" />
                  </div>
                  <div className="call-to-action-item__info">
                    <h3>Hỗ Trợ Trực Tuyến</h3>
                    <p>Chúng tôi luôn sẵn sàng hỗ trợ khách hàng trực tuyến</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*== End Call to Action Area ==*/}
        
        {/*== Start Newsletter Area ==*/}
        <div className="newsletter-area-wrapper sm-top">
          <div className="container container-wide">
          <div className="newsletter-area-inner bg-img" style={{ backgroundImage: "url('/assets/img/bg/newsletter-bg.jpg')" }}>
              <div className="row">
                <div className="col-lg-8 col-xl-5 m-auto">
                  <div className="newsletter-content text-center">
                    <h4>ƯU ĐÃI <span>ĐẶC BIỆT</span> KHI ĐĂNG KÝ</h4>
                    <h2>NHẬN GIẢM GIÁ TỨC THÌ CHO THÀNH VIÊN</h2>
                    <p>Đăng ký nhận bản tin để cập nhật những sản phẩm, <br />khuyến mãi và ưu đãi mới nhất từ chúng tôi.
                    </p>
                    <div className="newsletter-form-wrap">
                      <form action="#" method="post" onSubmit={(e) => e.preventDefault()}>
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
      
      </div>
    )
}
export default Pages;