import { Link } from 'react-router-dom';

const Blog_Left_Sidebar = () => {
    return (
        
      <div>
  <div className="page-header-wrap bg-img" data-bg="assets/img/bg/page-header-bg.jpg">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <div className="page-header-content">
            <div className="page-header-content-inner">
              <h1>Tin Tức Thanh Bên Trái</h1>
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
          <div className="col-lg-9 order-lg-1">
            <div className="blog-content-wrapper">
              <div className="row mtn-50 mtn-sm-30">
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
              </div>
            </div>
            <nav className="pagination-wrap sm-top-lh">
              <ul className="pagination pagination--2 justify-content-center">
                <li className="active"><Link to="/blog">1</Link></li>
                <li><Link to="/blog">2</Link></li>
                <li><Link to="/blog">3</Link></li>
                <li><Link to="/blog"><i className="ion-chevron-right" /></Link></li>
              </ul>
            </nav>
          </div>
          <div className="col-lg-3 order-lg-0">
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
                  <div className="sidebar-product">
                    <Link to="/blog-details" className="image"><img src="assets/img/blog/blog-3.jpg" alt="blog" /></Link>
                    <div className="content">
                      <Link to="/blog-details" className="title">Công nghệ hiện đại trong sản xuất</Link>
                      <p>Bảo trì lốp cho các phương tiện cơ giới dựa trên...</p>
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

</div>

    
    )
}
export default Blog_Left_Sidebar;