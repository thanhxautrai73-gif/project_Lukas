const Contact = () => {
    return (
        <div>
  {/*== Start Page Header Area ==*/}
  <div className="page-header-wrap bg-img" data-bg="assets/img/bg/page-header-bg.jpg">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <div className="page-header-content">
            <div className="page-header-content-inner">
              <h1>Contact</h1>
              <ul className="breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li className="current"><a href="#">Contact</a></li>
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
    <div className="contact-page-content">
      <div className="contact-info-wrapper">
        <div className="container">
          <div className="row mtn-30">
            <div className="col-sm-6 col-lg-4">
              <div className="contact-info-item">
                <div className="con-info-icon">
                  <i className="ion-ios-location-outline" />
                </div>
                <div className="con-info-txt">
                  <h4>Our Location</h4>
                  <p>(800) 123 456 789 / (800) 123 456 789
                    info@example.com</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="contact-info-item">
                <div className="con-info-icon">
                  <i className="ion-iphone" />
                </div>
                <div className="con-info-txt">
                  <h4>Contact us Anytime</h4>
                  <p>Mobile: 012 345 678 <br />
                    Fax: 123 456 789</p>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4">
              <div className="contact-info-item">
                <div className="con-info-icon">
                  <i className="ion-ios-email-outline" />
                </div>
                <div className="con-info-txt">
                  <h4>Write Some Words</h4>
                  <p>Support24/7@example.com
                    info@example.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form-wrapper sm-top">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="contact-form-content">
                <h2>Get In Touch</h2>
                <div className="contact-form-wrap">
                  <form action="http://whizthemes.com/mail-php/raju/gariongso/mail.php" method="post" id="contact-form">
                    <div className="contact-form-inner">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-item">
                            <label className="sr-only" htmlFor="name">name</label>
                            <input type="text" name="name" id="name" placeholder="Name" required />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-item">
                            <label className="sr-only" htmlFor="email">email</label>
                            <input type="email" name="email" id="email" placeholder="Email" required />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-item">
                            <label className="sr-only" htmlFor="subject">subject</label>
                            <input type="text" name="subject" id="subject" placeholder="Subject" required />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-item">
                            <label className="sr-only" htmlFor="message">message</label>
                            <textarea name="message" id="message" cols={30} rows={8} placeholder="Write Message" required defaultValue={""} />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-item">
                            <button className="btn btn-brand">Send a Message</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Form Submission Notification */}
                    <div className="form-message" />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-map-wrapper sm-top">
        <div id="map_content" className="h-100" data-lat="23.7639212" data-lng="90.429871" data-zoom={7} />
      </div>
    </div>
  </div>
  {/*== End Page Content Wrapper ==*/}
</div>

    )
}
export default Contact;