import { Link } from 'react-router-dom'
import axios from 'axios'

const Contact = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.querySelector('#name') as HTMLInputElement).value
    const email = (form.querySelector('#email') as HTMLInputElement).value
    const subject = (form.querySelector('#subject') as HTMLInputElement).value
    const message = (form.querySelector('#message') as HTMLTextAreaElement).value

    try {
      const response = await axios.post('/api/contact', { name, email, subject, message })
      alert(response.data.message || 'Gửi tin nhắn thành công!')
      form.reset()
    } catch (error) {
      console.error('Lỗi gửi tin nhắn:', error)
      let msg = 'Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại.'
      if (axios.isAxiosError(error) && error.response?.data?.message) {
        msg = error.response.data.message
      }
      alert(msg)
    }
  }
    return (
        <div>
  {/*== Start Page Header Area ==*/}
  <div className="page-header-wrap bg-img" data-bg="assets/img/bg/page-header-bg.jpg">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <div className="page-header-content">
            <div className="page-header-content-inner">
              <h1>Liên Hệ</h1>
              <ul className="breadcrumb">
                <li><Link to="/">Trang Chủ</Link></li>
                <li className="current"><Link to="/contact">Liên Hệ</Link></li>
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
                  <h4>Vị Trí Của Chúng Tôi</h4>
                  <p>(+84) 123 456 789 / (+84) 987 654 321
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
                  <h4>Liên Hệ Bất Cứ Lúc Nào</h4>
                  <p>Di động: 012 345 678 <br />
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
                  <h4>Gửi Lời Nhắn</h4>
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
                <h2>Liên Lạc Với Chúng Tôi</h2>
                <div className="contact-form-wrap">
                  <form onSubmit={handleSubmit} id="contact-form">
                    <div className="contact-form-inner">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="input-item">
                            <label className="sr-only" htmlFor="name">Họ và tên</label>
                            <input type="text" name="name" id="name" placeholder="Họ và tên" required />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="input-item">
                            <label className="sr-only" htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email" required />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-item">
                            <label className="sr-only" htmlFor="subject">Tiêu đề</label>
                            <input type="text" name="subject" id="subject" placeholder="Tiêu đề" required />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-item">
                            <label className="sr-only" htmlFor="message">Tin nhắn</label>
                            <textarea name="message" id="message" cols={30} rows={8} placeholder="Viết tin nhắn" required defaultValue={""} />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-item">
                            <button className="btn btn-brand">Gửi Tin Nhắn</button>
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