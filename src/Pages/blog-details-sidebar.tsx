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
              <h1>Blog Details With Sidebar</h1>
              <ul className="breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li><a href="blog.html">Blog</a></li>
                <li className="current"><a href="#">Blog Details</a></li>
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
                  <h2>Modern technology for making</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam
                    assumenda culpa cumque debitis dignissimos, dolor dolores doloribus ducimus
                    fuga
                    iusto magni maiores minus nam numquam officiis provident quasi quibusdam
                    quos
                    ratione rem saepe sequi sit unde ut velit vitae. Amet ea error expedita,
                    laboriosam maxime officiis porro ut velit.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam
                    assumenda culpa cumque debitis dignissimos, dolor dolores doloribus ducimus
                    fuga
                    iusto magni maiores minus nam numquam officiis provident quasi</p>
                  <blockquote className="blockquote">
                    <p>Dolor dolores doloribus ducimus fuga
                      iusto magni maiores minus nam numquam officiis provident quasi, consectetur
                      adipisicing elit. Aliquam aperiam assumenda </p>
                  </blockquote>
                  <figure className="blog-post-img">
                    <img src="assets/img/blog/blog-details-2.jpg" alt="Blog" />
                  </figure>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam
                    assumenda culpa cumque debitis dignissimos, dolor dolores doloribus ducimus
                    fuga
                    iusto magni maiores minus nam numquam officiis provident quasi quibusdam
                    quos
                    ratione rem saepe sequi sit unde ut velit vitae. Amet ea error expedita,
                    laboriosam maxime officiis porro ut velit.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam
                    assumenda culpa cumque debitis dignissimos, dolor dolores doloribus ducimus
                    fuga
                    iusto magni maiores minus nam numquam officiis provident quasi</p>
                </div>
                <div className="share-article text-center">
                  <h6>Share this article</h6>
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
                    <h3>Comments (5)</h3>
                    <div className="single-comment-wrap d-flex">
                      <figure className="author-thumb">
                        <a href="#"><img src="assets/img/extra/author-1.jpg" alt="Author" /></a>
                      </figure>
                      <div className="comments-info">
                        <p className="m-0">Praesent bibendum risus pellentesque faucibus
                          rhoncus.
                          Etiam a mollis
                          odio. Integer urna nisl, fermentum eu mollis et, gravida eu
                          elit.</p>
                        <div className="comment-footer mt-8 d-flex justify-content-between">
                          <a href="#" className="author"><strong>Duy</strong> - July 30, 2018</a>
                          <a href="#" className="btn-reply"><i className="fa fa-reply" /> Reply</a>
                        </div>
                      </div>
                    </div>
                    <div className="single-comment-wrap comment-reply d-flex">
                      <figure className="author-thumb">
                        <a href="#"><img src="assets/img/extra/author-2.jpg" alt="Author" /></a>
                      </figure>
                      <div className="comments-info">
                        <p className="m-0">Praesent bibendum risus pellentesque faucibus
                          rhoncus.
                          Etiam a mollis
                          odio. Integer urna nisl, fermentum eu mollis et, gravida eu
                          elit.</p>
                        <div className="comment-footer d-flex justify-content-between">
                          <a href="#" className="author"><strong>Deo</strong> - July 30, 2018</a>
                          <a href="#" className="btn-reply"><i className="fa fa-reply" /> Reply</a>
                        </div>
                      </div>
                    </div>
                    <div className="single-comment-wrap d-flex">
                      <figure className="author-thumb">
                        <a href="#"><img src="assets/img/extra/author-1.jpg" alt="Author" /></a>
                      </figure>
                      <div className="comments-info">
                        <p className="m-0">Praesent bibendum risus pellentesque faucibus
                          rhoncus.
                          Etiam a mollis
                          odio. Integer urna nisl, fermentum eu mollis et, gravida eu
                          elit.</p>
                        <div className="comment-footer d-flex justify-content-between">
                          <a href="#" className="author"><strong>Alex</strong> - July 30, 2018</a>
                          <a href="#" className="btn-reply"><i className="fa fa-reply" /> Reply</a>
                        </div>
                      </div>
                    </div>
                    <div className="single-comment-wrap d-flex">
                      <figure className="author-thumb">
                        <a href="#"><img src="assets/img/extra/author-2.jpg" alt="Author" /></a>
                      </figure>
                      <div className="comments-info">
                        <p className="m-0">Praesent bibendum risus pellentesque faucibus
                          rhoncus.
                          Etiam a mollis
                          odio. Integer urna nisl, fermentum eu mollis et, gravida eu
                          elit.</p>
                        <div className="comment-footer d-flex justify-content-between">
                          <a href="#" className="author"><strong>Afex</strong> - July 30, 2018</a>
                          <a href="#" className="btn-reply"><i className="fa fa-reply" /> Reply</a>
                        </div>
                      </div>
                    </div>
                    <div className="single-comment-wrap comment-reply d-flex">
                      <figure className="author-thumb">
                        <a href="#"><img src="assets/img/extra/author-1.jpg" alt="Author" /></a>
                      </figure>
                      <div className="comments-info">
                        <p className="m-0">Praesent bibendum risus pellentesque faucibus
                          rhoncus.
                          Etiam a mollis
                          odio. Integer urna nisl, fermentum eu mollis et, gravida eu
                          elit.</p>
                        <div className="comment-footer d-flex justify-content-between">
                          <a href="#" className="author"><strong>Tuntuni</strong> - July 30,
                            2018</a>
                          <a href="#" className="btn-reply"><i className="fa fa-reply" /> Reply</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="comment-box-form mt-50 mt-sm-35">
                    <h3>Leave your thought</h3>
                    <form action="#">
                      <div className="row mtn-30">
                        <div className="col-12">
                          <div className="input-item">
                            <label htmlFor="comments" className="sr-only">comments</label>
                            <textarea name="comments" id="comments" cols={30} rows={5} placeholder="Write your Comment*" required defaultValue={""} />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="input-item">
                            <label htmlFor="name" className="sr-only">name</label>
                            <input type="text" id="name" placeholder="Name*" required />
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
                            <label htmlFor="url" className="sr-only">Website Url</label>
                            <input type="url" id="url" placeholder="Website" />
                          </div>
                        </div>
                        <div className="col-12 mt-40">
                          <button className="btn btn-brand w-100">Submit</button>
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
                <h4 className="sidebar-title">Search</h4>
                <div className="sidebar-body">
                  <div className="sidebar-search">
                    <form action="#" method="post">
                      <input type="text" placeholder="search Here" />
                      <button className="btn-src"><i className="fa fa-search" /></button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="sidebar-item">
                <h4 className="sidebar-title">Categories</h4>
                <div className="sidebar-body">
                  <ul className="sidebar-list">
                    <li><a href="#">Car Parts <span>(2)</span></a></li>
                    <li><a href="#">Car seat cover <span>(3)</span></a></li>
                    <li><a href="#">Repair <span>(6)</span></a></li>
                    <li><a href="#">Tire <span>(2)</span></a></li>
                    <li><a href="#">Oil <span>(11)</span></a></li>
                    <li><a href="#">Uncategorized <span>(4)</span></a></li>
                  </ul>
                </div>
              </div>
              <div className="sidebar-item">
                <h4 className="sidebar-title">Recent Post</h4>
                <div className="sidebar-body">
                  <div className="sidebar-product">
                    <a href="blog-details.html" className="image"><img src="assets/img/blog/blog-1.jpg" alt="blog" /></a>
                    <div className="content">
                      <a href="blog-details.html" className="title">GM is About to Surprise with</a>
                      <p>There are simple hand-held tire-pressure gauges which can..</p>
                    </div>
                  </div>
                  <div className="sidebar-product">
                    <a href="blog-details.html" className="image"><img src="assets/img/blog/blog-2.jpg" alt="blog" /></a>
                    <div className="content">
                      <a href="blog-details.html" className="title">Common Engine Oil Problems</a>
                      <p>Under-inflation of tires can cause premature and uneven...</p>
                    </div>
                  </div>
                  <div className="sidebar-product">
                    <a href="blog-details.html" className="image"><img src="assets/img/blog/blog-3.jpg" alt="blog" /></a>
                    <div className="content">
                      <a href="blog-details.html" className="title">Modern technology for making</a>
                      <p>Tire maintenance for motor vehicles is based on.</p>
                    </div>
                  </div>
                  <div className="sidebar-product">
                    <a href="blog-details.html" className="image"><img src="assets/img/blog/blog-4.jpg" alt="blog" /></a>
                    <div className="content">
                      <a href="blog-details.html" className="title">Common Engine Oil Problems</a>
                      <p>Under-inflation of tires can cause premature and uneven...</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sidebar-item">
                <h4 className="sidebar-title">Tags</h4>
                <div className="sidebar-body">
                  <ul className="tags">
                    <li><a href="#">Car</a></li>
                    <li><a href="#">Parts</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Tayer</a></li>
                    <li><a href="#">Seat</a></li>
                    <li><a href="#">Engine</a></li>
                    <li><a href="#">Parts</a></li>
                    <li><a href="#">Fuel</a></li>
                    <li><a href="#">Modern</a></li>
                    <li><a href="#">Brake</a></li>
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