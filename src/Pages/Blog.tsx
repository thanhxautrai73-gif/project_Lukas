import { Link } from 'react-router-dom'

const Blog = () => {
    return (
        <div>
  {/*== Start Page Header Area ==*/}
  <div className="page-header-wrap bg-img" data-bg="assets/img/bg/page-header-bg.jpg">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <div className="page-header-content">
            <div className="page-header-content-inner">
              <h1>Tin Tức</h1>
              <ul className="breadcrumb">
                <li><Link to="/">Trang Chủ</Link></li>
                <li className="current">Tin Tức</li>
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
    <div className="blog-page-content-wrap">
      <div className="container container-wide">
        <div className="row">
          <div className="col-lg-9">
            <div className="blog-content-wrapper">
              <div className="row mtn-25">
                <div className="col-md-6 col-xl-4">
                  <div className="blog-item">
                    <figure className="blog-item__thumb">
                      <Link to="/blog-details"><img src="assets/img/blog/blog-1.jpg" alt="Blog" /></Link>
                    </figure>
                    <div className="blog-item__info">
                      <div className="post-date">
                        <span>01</span>
                        <span>Th6</span>
                      </div>
                      <div className="post-meta">
                        <span className="author">Tác giả: <Link to="/blog-details">Lukas</Link></span>
                        <span className="comment">Bình luận: <Link to="/blog-details">3</Link></span>
                      </div>
                      <h2 className="post-title"><Link to="/blog-details">GM sắp gây bất ngờ với dòng xe mới</Link></h2>
                      <p className="post-excerpt">Có những thiết bị đo áp suất lốp cầm tay đơn giản có thể được gắn tạm thời vào...</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="blog-item">
                    <figure className="blog-item__thumb">
                      <Link to="/blog-details"><img src="assets/img/blog/blog-2.jpg" alt="Blog" /></Link>
                    </figure>
                    <div className="blog-item__info">
                      <div className="post-date">
                        <span>28</span>
                        <span>Th5</span>
                      </div>
                      <div className="post-meta">
                        <span className="author">Tác giả: <Link to="/blog-details">Lukas</Link></span>
                        <span className="comment">Bình luận: <Link to="/blog-details">3</Link></span>
                      </div>
                      <h2 className="post-title"><Link to="/blog-details">Các vấn đề thường gặp về dầu động cơ</Link></h2>
                      <p className="post-excerpt">Lốp xe thiếu hơi có thể gây mòn lốp sớm và không đều, tiêu tốn thêm nhiên liệu...</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="blog-item">
                    <figure className="blog-item__thumb">
                      <Link to="/blog-details"><img src="assets/img/blog/blog-3.jpg" alt="Blog" /></Link>
                    </figure>
                    <div className="blog-item__info">
                      <div className="post-date">
                        <span>31</span>
                        <span>Th5</span>
                      </div>
                      <div className="post-meta">
                        <span className="author">Tác giả: <Link to="/blog-details">Lukas</Link></span>
                        <span className="comment">Bình luận: <Link to="/blog-details">3</Link></span>
                      </div>
                      <h2 className="post-title"><Link to="/blog-details">Công nghệ hiện đại trong sản xuất phụ tùng</Link></h2>
                      <p className="post-excerpt">Có những thiết bị đo áp suất lốp cầm tay đơn giản có thể được gắn tạm thời vào...</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="blog-item">
                    <figure className="blog-item__thumb">
                      <Link to="/blog-details"><img src="assets/img/blog/blog-4.jpg" alt="Blog" /></Link>
                    </figure>
                    <div className="blog-item__info">
                      <div className="post-date">
                        <span>31</span>
                        <span>Th5</span>
                      </div>
                      <div className="post-meta">
                        <span className="author">Tác giả: <Link to="/blog-details">Lukas</Link></span>
                        <span className="comment">Bình luận: <Link to="/blog-details">3</Link></span>
                      </div>
                      <h2 className="post-title"><Link to="/blog-details">Dịch vụ xe điện và những lợi ích đi kèm</Link></h2>
                      <p className="post-excerpt">Có những thiết bị đo áp suất lốp cầm tay đơn giản có thể được gắn tạm thời vào...</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="blog-item">
                    <figure className="blog-item__thumb">
                      <Link to="/blog-details"><img src="assets/img/blog/blog-5.jpg" alt="Blog" /></Link>
                    </figure>
                    <div className="blog-item__info">
                      <div className="post-date">
                        <span>31</span>
                        <span>Th5</span>
                      </div>
                      <div className="post-meta">
                        <span className="author">Tác giả: <Link to="/blog-details">Lukas</Link></span>
                        <span className="comment">Bình luận: <Link to="/blog-details">3</Link></span>
                      </div>
                      <h2 className="post-title"><Link to="/blog-details">Các vấn đề thường gặp về dầu động cơ</Link></h2>
                      <p className="post-excerpt">Có những thiết bị đo áp suất lốp cầm tay đơn giản có thể được gắn tạm thời vào...</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="blog-item">
                    <figure className="blog-item__thumb">
                      <Link to="/blog-details"><img src="assets/img/blog/blog-6.jpg" alt="Blog" /></Link>
                    </figure>
                    <div className="blog-item__info">
                      <div className="post-date">
                        <span>31</span>
                        <span>Th5</span>
                      </div>
                      <div className="post-meta">
                        <span className="author">Tác giả: <Link to="/blog-details">Lukas</Link></span>
                        <span className="comment">Bình luận: <Link to="/blog-details">3</Link></span>
                      </div>
                      <h2 className="post-title"><Link to="/blog-details">Dầu phanh có bị hỏng theo thời gian không?</Link>
                      </h2>
                      <p className="post-excerpt">Có những thiết bị đo áp suất lốp cầm tay đơn giản có thể được gắn tạm thời vào...</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="blog-item">
                    <figure className="blog-item__thumb">
                      <Link to="/blog-details"><img src="assets/img/blog/blog-7.jpg" alt="Blog" /></Link>
                    </figure>
                    <div className="blog-item__info">
                      <div className="post-date">
                        <span>31</span>
                        <span>Th5</span>
                      </div>
                      <div className="post-meta">
                        <span className="author">Tác giả: <Link to="/blog-details">Lukas</Link></span>
                        <span className="comment">Bình luận: <Link to="/blog-details">3</Link></span>
                      </div>
                      <h2 className="post-title"><Link to="/blog-details">Sẵn sàng cho ngày đua kịch tính</Link></h2>
                      <p className="post-excerpt">Có những thiết bị đo áp suất lốp cầm tay đơn giản có thể được gắn tạm thời vào...</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="blog-item">
                    <figure className="blog-item__thumb">
                      <Link to="/blog-details"><img src="assets/img/blog/blog-8.jpg" alt="Blog" /></Link>
                    </figure>
                    <div className="blog-item__info">
                      <div className="post-date">
                        <span>31</span>
                        <span>Th5</span>
                      </div>
                      <div className="post-meta">
                        <span className="author">Tác giả: <Link to="/blog-details">Lukas</Link></span>
                        <span className="comment">Bình luận: <Link to="/blog-details">3</Link></span>
                      </div>
                      <h2 className="post-title"><Link to="/blog-details">Cách làm lốp xe bền bỉ hơn 8 năm</Link></h2>
                      <p className="post-excerpt">Có những thiết bị đo áp suất lốp cầm tay đơn giản có thể được gắn tạm thời vào...</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-4">
                  <div className="blog-item">
                    <figure className="blog-item__thumb">
                      <Link to="/blog-details"><img src="assets/img/blog/blog-9.jpg" alt="Blog" /></Link>
                    </figure>
                    <div className="blog-item__info">
                      <div className="post-date">
                        <span>31</span>
                        <span>Th5</span>
                      </div>
                      <div className="post-meta">
                        <span className="author">Tác giả: <Link to="/blog-details">Lukas</Link></span>
                        <span className="comment">Bình luận: <Link to="/blog-details">3</Link></span>
                      </div>
                      <h2 className="post-title"><Link to="/blog-details">Khi nào tôi cần thay đĩa phanh?</Link></h2>
                      <p className="post-excerpt">Có những thiết bị đo áp suất lốp cầm tay đơn giản có thể được gắn tạm thời vào...</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav className="pagination-wrap mt-70 mt-md-50 mt-sm-35">
              <ul className="pagination pagination--2 justify-content-center">
                <li className="active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#"><i className="ion-chevron-right" /></a></li>
              </ul>
            </nav>
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
                    <li><a href="#">Phụ tùng ô tô <span>(2)</span></a></li>
                    <li><a href="#">Bọc ghế ô tô <span>(3)</span></a></li>
                    <li><a href="#">Sửa chữa <span>(6)</span></a></li>
                    <li><a href="#">Lốp xe <span>(2)</span></a></li>
                    <li><a href="#">Dầu nhớt <span>(11)</span></a></li>
                    <li><a href="#">Chưa phân loại <span>(4)</span></a></li>
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
                  <div className="sidebar-product">
                    <Link to="/blog-details" className="image"><img src="assets/img/blog/blog-3.jpg" alt="blog" /></Link>
                    <div className="content">
                      <Link to="/blog-details" className="title">Công nghệ hiện đại trong sản xuất</Link>
                      <p>Bảo trì lốp cho các phương tiện cơ giới dựa trên...</p>
                    </div>
                  </div>
                  <div className="sidebar-product">
                    <Link to="/blog-details" className="image"><img src="assets/img/blog/blog-4.jpg" alt="blog" /></Link>
                    <div className="content">
                      <Link to="/blog-details" className="title">Dịch vụ xe điện và những lợi ích</Link>
                      <p>Lốp xe thiếu hơi có thể gây mòn lốp sớm...</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar-item">
                <h4 className="sidebar-title">Thẻ</h4>
                <div className="sidebar-body">
                  <ul className="tags">
                    <li><a href="#">Ô tô</a></li>
                    <li><a href="#">Phụ tùng</a></li>
                    <li><a href="#">Cửa hàng</a></li>
                    <li><a href="#">Lốp xe</a></li>
                    <li><a href="#">Ghế</a></li>
                    <li><a href="#">Động cơ</a></li>
                    <li><a href="#">Phụ tùng</a></li>
                    <li><a href="#">Nhiên liệu</a></li>
                    <li><a href="#">Hiện đại</a></li>
                    <li><a href="#">Phanh</a></li>
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
export default Blog;