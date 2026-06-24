import { Link } from 'react-router-dom'

const Gallery = () => {
    return (
       <div>
  {/*== Start Page Header Area ==*/}
  <div className="page-header-wrap bg-img" data-bg="assets/img/bg/page-header-bg.jpg">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <div className="page-header-content">
            <div className="page-header-content-inner">
              <h1>Bộ Sưu Tập</h1>
              <ul className="breadcrumb">
                <li><Link to="/">Trang Chủ</Link></li>
                <li className="current">Bộ Sưu Tập</li>
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
    <div className="gallery-page-content">
      <div className="container container-wide">
        <div className="row mtn-30 image-gallery">
          <div className="col-sm-6 col-lg-3">
            <div className="gallery-item" data-mfp-src="assets/img/product/product-1.png">
              <img src="assets/img/product/product-1.png" alt="gallery" />
              <div className="gallery-item__text">
                <h3>Phanh Đĩa</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="gallery-item" data-mfp-src="assets/img/product/product-2.png">
              <img src="assets/img/product/product-2.png" alt="gallery" />
              <div className="gallery-item__text">
                <h3>Khung Bánh Xe</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="gallery-item" data-mfp-src="assets/img/product/product-3.png">
              <img src="assets/img/product/product-3.png" alt="gallery" />
              <div className="gallery-item__text">
                <h3>Vô Lăng Ô Tô</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="gallery-item" data-mfp-src="assets/img/product/product-4.png">
              <img src="assets/img/product/product-4.png" alt="gallery" />
              <div className="gallery-item__text">
                <h3>Vô Lăng Ô Tô</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="gallery-item" data-mfp-src="assets/img/product/product-5.png">
              <img src="assets/img/product/product-5.png" alt="gallery" />
              <div className="gallery-item__text">
                <h3>Vô Lăng Ô Tô</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="gallery-item" data-mfp-src="assets/img/product/product-6.png">
              <img src="assets/img/product/product-6.png" alt="gallery" />
              <div className="gallery-item__text">
                <h3>Vô Lăng Ô Tô</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="gallery-item" data-mfp-src="assets/img/product/product-7.png">
              <img src="assets/img/product/product-7.png" alt="gallery" />
              <div className="gallery-item__text">
                <h3>Vô Lăng Ô Tô</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="gallery-item" data-mfp-src="assets/img/product/product-8.png">
              <img src="assets/img/product/product-8.png" alt="gallery" />
              <div className="gallery-item__text">
                <h3>Vô Lăng Ô Tô</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="gallery-item" data-mfp-src="assets/img/product/product-9.png">
              <img src="assets/img/product/product-9.png" alt="gallery" />
              <div className="gallery-item__text">
                <h3>Vô Lăng Ô Tô</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="gallery-item" data-mfp-src="assets/img/product/product-10.png">
              <img src="assets/img/product/product-10.png" alt="gallery" />
              <div className="gallery-item__text">
                <h3>Vô Lăng Ô Tô</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="gallery-item" data-mfp-src="assets/img/product/product-11.png">
              <img src="assets/img/product/product-11.png" alt="gallery" />
              <div className="gallery-item__text">
                <h3>Vô Lăng Ô Tô</h3>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-lg-3">
            <div className="gallery-item" data-mfp-src="assets/img/product/product-12.png">
              <img src="assets/img/product/product-12.png" alt="gallery" />
              <div className="gallery-item__text">
                <h3>Vô Lăng Ô Tô</h3>
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
export default Gallery;