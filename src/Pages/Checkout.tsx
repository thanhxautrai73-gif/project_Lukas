import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import axios from 'axios'

const Checkout = () => {
  const navigate = useNavigate()
  const { cart, getTotalPrice, clearCart } = useCart()

  // Form states
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [streetAddress, setStreetAddress] = useState('')
  const [town, setTown] = useState('')
  const [phone, setPhone] = useState('')
  const [orderNote, setOrderNote] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const subtotal = getTotalPrice()
  const shipping = cart.length > 0 ? 10 : 0
  const total = subtotal + shipping

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    if (!firstName || !lastName || !email || !streetAddress || !town || !phone) {
        setError('Vui lòng nhập đầy đủ các trường thông tin bắt buộc!')
        setLoading(false)
        return
    }

    try {
        const orderData = {
            customerName: `${lastName} ${firstName}`.trim(),
            email,
            address: `${streetAddress}, ${town}`,
            phone,
            note: orderNote,
            items: cart.map(item => ({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: item.quantity
            })),
            total
        }

        await axios.post('http://localhost:5000/api/orders', orderData)
        
        clearCart()
        setLoading(false)
        navigate('/thank-you')
    } catch (err: any) {
        setError(err.response?.data?.message || 'Có lỗi xảy ra trong quá trình đặt hàng. Vui lòng thử lại!')
        setLoading(false)
    }
  }

  if (cart.length === 0) {
    return (
      <div className="page-content-wrapper sp-y">
        <div className="container text-center">
          <h2>Giỏ hàng của bạn đang trống!</h2>
          <p>Vui lòng thêm một số sản phẩm vào giỏ hàng trước khi thanh toán.</p>
          <Link to="/shop" className="btn btn-brand mt-3">Đi đến Cửa Hàng</Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/*== Start Page Header Area ==*/}
      <div className="page-header-wrap bg-img" data-bg="/assets/img/bg/page-header-bg.jpg">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="page-header-content">
                <div className="page-header-content-inner">
                  <h1>Thanh Toán</h1>
                  <ul className="breadcrumb">
                    <li><Link to="/">Trang Chủ</Link></li>
                    <li><Link to="/shop">Cửa Hàng</Link></li>
                    <li className="current">Thanh Toán</li>
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
        <div className="cart-page-content-wrap">
          <div className="container container-wide">
            {error && <div className="alert alert-danger text-center">{error}</div>}
            <form onSubmit={handlePlaceOrder}>
              <div className="row">
                <div className="col-lg-6">
                  {/* Checkout Form Area Start */}
                  <div className="checkout-billing-details-wrap">
                    <h2>Chi Tiết Thanh Toán</h2>
                    <div className="billing-form-wrap">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="input-item mt-0">
                              <label htmlFor="f_name" className="sr-only required">Tên</label>
                              <input 
                                type="text" 
                                id="f_name" 
                                placeholder="Tên *" 
                                value={firstName} 
                                onChange={(e) => setFirstName(e.target.value)} 
                                required 
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="input-item mt-md-0">
                              <label htmlFor="l_name" className="sr-only required">Họ</label>
                              <input 
                                type="text" 
                                id="l_name" 
                                placeholder="Họ *" 
                                value={lastName} 
                                onChange={(e) => setLastName(e.target.value)} 
                                required 
                              />
                            </div>
                          </div>
                        </div>
                        <div className="input-item">
                          <label htmlFor="email" className="sr-only required">Địa chỉ Email</label>
                          <input 
                            type="email" 
                            id="email" 
                            placeholder="Địa chỉ Email *" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                          />
                        </div>
                        <div className="input-item">
                          <label htmlFor="street-address" className="sr-only required">Địa chỉ đường phố</label>
                          <input 
                            type="text" 
                            id="street-address" 
                            placeholder="Địa chỉ số nhà, tên đường *" 
                            value={streetAddress} 
                            onChange={(e) => setStreetAddress(e.target.value)} 
                            required 
                          />
                        </div>
                        <div className="input-item">
                          <label htmlFor="town" className="sr-only required">Tỉnh / Thành phố</label>
                          <input 
                            type="text" 
                            id="town" 
                            placeholder="Tỉnh / Thành phố *" 
                            value={town} 
                            onChange={(e) => setTown(e.target.value)} 
                            required 
                          />
                        </div>
                        <div className="input-item">
                          <label htmlFor="phone" className="sr-only">Số điện thoại</label>
                          <input 
                            type="text" 
                            id="phone" 
                            placeholder="Số điện thoại *" 
                            value={phone} 
                            onChange={(e) => setPhone(e.target.value)} 
                            required 
                          />
                        </div>
                        <div className="input-item">
                          <label htmlFor="ordernote" className="sr-only">Ghi chú đơn hàng</label>
                          <textarea 
                            name="ordernote" 
                            id="ordernote" 
                            cols={30} 
                            rows={3} 
                            placeholder="Ghi chú về đơn hàng của bạn, ví dụ: ghi chú đặc biệt cho giao hàng." 
                            value={orderNote} 
                            onChange={(e) => setOrderNote(e.target.value)}
                          />
                        </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-xl-5 ml-auto">
                  {/* Checkout Page Order Details */}
                  <div className="order-details-area-wrap">
                    <h2>Đơn Hàng Của Bạn</h2>
                    <div className="order-details-table table-responsive">
                      <table className="table table-borderless">
                        <thead>
                          <tr>
                            <th>Sản phẩm</th>
                            <th>Tổng cộng</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart.map(item => (
                            <tr className="cart-item" key={item.id}>
                              <td><span className="product-title">{item.name}</span> <span className="product-quantity">×  {item.quantity}</span></td>
                              <td>${(item.price * item.quantity).toFixed(2)}</td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr className="cart-subtotal">
                            <th>Tổng phụ</th>
                            <td>${subtotal.toFixed(2)}</td>
                          </tr>
                          <tr className="shipping">
                            <th>Giao hàng</th>
                            <td>
                              <ul className="shipping-method">
                                <li>
                                  <div className="form-check">
                                    <input type="radio" id="flat_shipping" name="shipping_method" className="form-check-input" defaultChecked />
                                    <label className="form-check-label" htmlFor="flat_shipping">Phí cố định : $10</label>
                                  </div>
                                </li>
                              </ul>
                            </td>
                          </tr>
                          <tr className="final-total">
                            <th>Tổng cộng</th>
                            <td><span className="total-amount">${total.toFixed(2)}</span></td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    <div className="order-details-footer">
                      <p>Dữ liệu cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng, hỗ trợ trải nghiệm của bạn trên trang web này và cho các mục đích khác được mô tả trong 
                        <a href="#" className="text-warning"> chính sách bảo mật</a> của chúng tôi.
                      </p>
                      <div className="form-check mt-10">
                        <input type="checkbox" id="privacy" className="form-check-input" required />
                        <label htmlFor="privacy" className="form-check-label">Tôi đã đọc và đồng ý với các điều khoản và điều kiện của trang web</label>
                      </div>
                      <button type="submit" className="btn btn-brand mt-40 w-100" disabled={loading}>
                        {loading ? 'Đang Xử Lý...' : 'Đặt Hàng'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/*== End Page Content Wrapper ==*/}
    </div>
  )
}

export default Checkout;