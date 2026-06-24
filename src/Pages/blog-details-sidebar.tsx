import { Link } from 'react-router-dom';

const Blog_Details_Sidebar = () => {
    return (
       <div>
  {/*== Start Page Header Area ==*/}
  <div className="page-header-wrap bg-img" data-bg="assets/img/bg/page-header-bg.jpg">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <div className="page-header-content">
            <div className="page-header-content-inner">
              <h1>Chi Tiết Tin Tức Có Thanh Bên</h1>
              <ul className="breadcrumb">
                <li><Link to="/">Trang Chủ</Link></li>
                <li><Link to="/blog">Tin Tức</Link></li>
                <li className="current">Chi Tiết Tin Tức</li>
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
    <div className="blog-details-page-wrapper">
      <div className="container container-wide">
        <div className="row">
          <div className="col-lg-9">
            <article className="blog-post-details">
              <figure className="blog-post-thumb">
                <img src="assets/img/blog/blog-details-1.jpg" alt="Blog" />
              </figure>
              <section className="blog-post-txt-wrap">
                <div className="blog-post-txt">
                  <h2>Công nghệ hiện đại trong sản xuất</h2>
                  <p>Nội dung bài viết về công nghệ hiện đại được áp dụng trong quá trình sản xuất các linh kiện phụ tùng ô tô chất lượng cao, giúp tăng hiệu suất và độ bền cho xe của bạn.</p>
                  <p>Chúng tôi luôn cập nhật những xu hướng mới nhất trong ngành công nghiệp ô tô để mang lại giá trị tốt nhất cho khách hàng.</p>
                  <blockquote className="blockquote">
                    <p>Chất lượng là ưu tiên hàng đầu của chúng tôi trong mọi sản phẩm cung cấp ra thị trường. </p>
                  </blockquote>
                  <figure className="blog-post-img">
                    <img src="assets/img/blog/blog-details-2.jpg" alt="Blog" />
                  </figure>
                  <p>Nội dung chi tiết hơn về các quy trình kiểm định nghiêm ngặt và tiêu chuẩn quốc tế mà chúng tôi đang áp dụng.</p>
                </div>
                <div className="share-article text-center">
                  <h6>Chia sẻ bài viết này</h6>
                  <div className="share-icons nav justify-content-center">
                    <a className="facebook" href="#"><i className="ion-social-facebook" /></a>
                    <a className="twitter" href="#"><i className="ion-social-twitter" /></a>
                    <a className="reddit" href="#"><i className="ion-social-reddit" /></a>
                    <a className="pinterest" href="#"><i className="ion-social-pinterest" /></a>
                  </div>
                </div>
                {/* Start Comment Area Wrapper */}
                <div className="comment-area-wrapper">
                  <div className="comments-view-area">
                    <h3>Bình luận (5)</h3>
                    <div className="single-comment-wrap d-flex">
                      <figure className="author-thumb">
                        <a href="#"><img src="assets/img/extra/author-1.jpg" alt="Author" /></a>
                      </figure>
                      <div className="comments-info">
                        <p className="m-0">Bài viết rất hữu ích, tôi đã hiểu rõ hơn về quy trình sản xuất.</p>
                        <div className="comment-footer mt-8 d-flex justify-content-between">
                          <a href="#" className="author"><strong>Duy</strong> - 30 Tháng 7, 2018</a>
                          <a href="#" className="btn-reply"><i className="fa fa-reply" /> Trả lời</a>
                        </div>
                      </div>
                    </div>
                    <div className="single-comment-wrap comment-reply d-flex">
                      <figure className="author-thumb">
                        <a href="#"><img src="assets/img/extra/author-2.jpg" alt="Author" /></a>
                      </figure>
                      <div className="comments-info">
                        <p className="m-0">Cảm ơn thông tin chia sẻ từ tác giả.</p>
                        <div className="comment-footer d-flex justify-content-between">
                          <a href="#" className="author"><strong>Deo</strong> - 30 Tháng 7, 2018</a>
                          <a href="#" className="btn-reply"><i className="fa fa-reply" /> Trả lời</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-box-form mt-50 mt-sm-35">
                    <h3>Để lại ý kiến của bạn</h3>
                    <form action="#">
                      <div className="row mtn-30">
                        <div className="col-12">
                          <div className="input-item">
                            <label htmlFor="comments" className="sr-only">Bình luận</label>
                            <textarea name="comments" id="comments" cols={30} rows={5} placeholder="Viết bình luận của bạn*" required defaultValue={""} />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="input-item">
                            <label htmlFor="name" className="sr-only">Họ tên</label>
                            <input type="text" id="name" placeholder="Họ tên*" required />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="input-item">
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input type="email" id="email" placeholder="Email*" required />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="input-item ">
                            <label htmlFor="url" className="sr-only">Địa chỉ Website</label>
                            <input type="url" id="url" placeholder="Website" />
                          </div>
                        </div>
                        <div className="col-12 mt-40">
                          <button className="btn btn-brand w-100">Gửi bình luận</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </section>
            </article>
          </div>
          <div className="col-lg-3">
            <div className="sidebar-area">
              <div className="sidebar-item">
                <h4 className="sidebar-title">Tìm kiếm</h4>
                <div className="sidebar-body">
                  <div className="sidebar-search">
                    <form action="#" method="post">
                      <input type="text" placeholder="Tìm kiếm tại đây" />
                      <button className="btn-src"><i className="fa fa-search" /></button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="sidebar-item">
                <h4 className="sidebar-title">Danh mục</h4>
                <div className="sidebar-body">
                  <ul className="sidebar-list">
                    <li><Link to="/blog">Phụ tùng ô tô <span>(2)</span></Link></li>
                    <li><Link to="/blog">Bọc ghế ô tô <span>(3)</span></Link></li>
                    <li><Link to="/blog">Sửa chữa <span>(6)</span></Link></li>
                    <li><Link to="/blog">Lốp xe <span>(2)</span></Link></li>
                    <li><Link to="/blog">Dầu nhớt <span>(11)</span></Link></li>
                    <li><Link to="/blog">Chưa phân loại <span>(4)</span></Link></li>
                  </ul>
                </div>
              </div>
              <div className="sidebar-item">
                <h4 className="sidebar-title">Bài viết gần đây</h4>
                <div className="sidebar-body">
                  <div className="sidebar-product">
                    <Link to="/blog-details" className="image"><img src="assets/img/blog/blog-1.jpg" alt="blog" /></Link>
                    <div className="content">
                      <Link to="/blog-details" className="title">GM sắp gây bất ngờ với dòng xe mới</Link>
                      <p>Có những thiết bị đo áp suất lốp cầm tay đơn giản...</p>
                    </div>
                  </div>
                  <div className="sidebar-product">
                    <Link to="/blog-details" className="image"><img src="assets/img/blog/blog-2.jpg" alt="blog" /></Link>
                    <div className="content">
                      <Link to="/blog-details" className="title">Các vấn đề thường gặp về dầu động cơ</Link>
                      <p>Lốp xe thiếu hơi có thể gây mòn lốp sớm...</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar-item">
                <h4 className="sidebar-title">Thẻ</h4>
                <div className="sidebar-body">
                  <ul className="tags">
                    <li><Link to="/blog">Ô tô</Link></li>
                    <li><Link to="/blog">Phụ tùng</Link></li>
                    <li><Link to="/blog">Cửa hàng</Link></li>
                    <li><Link to="/blog">Lốp xe</Link></li>
                    <li><Link to="/blog">Ghế</Link></li>
                    <li><Link to="/blog">Động cơ</Link></li>
                    <li><Link to="/blog">Phụ tùng</Link></li>
                    <li><Link to="/blog">Nhiên liệu</Link></li>
                    <li><Link to="/blog">Hiện đại</Link></li>
                    <li><Link to="/blog">Phanh</Link></li>
                  </ul>
                </div>
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
export default Blog_Details_Sidebar;