import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Cart = () => {
    const { cart, removeFromCart, updateQuantity, clearCart, getTotalPrice } = useCart()
    const navigate = useNavigate()

    const subtotal = getTotalPrice()
    const shipping = cart.length > 0 ? 10 : 0
    const total = subtotal + shipping

    const handleCheckout = () => {
        if (cart.length > 0) {
            navigate('/checkout')
        }
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
              <h1>Giỏ Hàng</h1>
              <ul className="breadcrumb">
                <li><Link to="/">Trang Chủ</Link></li>
                <li><Link to="/shop">Cửa Hàng</Link></li>
                <li className="current">Giỏ Hàng</li>
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
        <div className="row">
          <div className="col-lg-8">
            <div className="shopping-cart-list-area">
              <div className="shopping-cart-table table-responsive">
                <table className="table table-bordered text-center mb-0">
                  <thead>
                    <tr>
                      <th>Sản phẩm</th>
                      <th>Giá</th>
                      <th>Số lượng</th>
                      <th>Tổng cộng</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.length === 0 ? (
                      <tr>
                        <td colSpan={4} className="text-center py-5">
                          <p className="lead">Giỏ hàng của bạn đang trống</p>
                          <Link to="/shop" className="btn btn-brand mt-3">Tiếp tục mua sắm</Link>
                        </td>
                      </tr>
                    ) : (
                      cart.map(item => (
                        <tr key={item.id}>
                          <td className="product-list">
                            <div className="cart-product-item d-flex align-items-center">
                              <div className="remove-icon">
                                <button onClick={() => removeFromCart(item.id)}><i className="fa fa-trash-o" /></button>
                              </div>
                              <Link to="/single-product" className="product-thumb">
                                <img src={item.image} alt={item.name} />
                              </Link>
                              <Link to="/single-product" className="product-name">{item.name}</Link>
                            </div>
                          </td>
                          <td>
                            <span className="price">${item.price.toFixed(2)}</span>
                          </td>
                          <td>
                            <div className="pro-qty" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                              <button 
                                className="qty-btn" 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                style={{ border: 'none', background: 'none', padding: '0 10px', fontSize: '20px' }}
                              >-</button>
                              <input 
                                type="text" 
                                className="quantity" 
                                title="Quantity" 
                                value={item.quantity}
                                readOnly
                                style={{ width: '40px', textAlign: 'center', border: '1px solid #ddd' }}
                              />
                              <button 
                                className="qty-btn" 
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                style={{ border: 'none', background: 'none', padding: '0 10px', fontSize: '20px' }}
                              >+</button>
                            </div>
                          </td>
                          <td>
                            <span className="price">${(item.price * item.quantity).toFixed(2)}</span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
                    <div className="cart-coupon-update-area d-sm-flex justify-content-between align-items-center">
                      <div className="coupon-form-wrap">
                        <form onSubmit={(e) => e.preventDefault()}>
                          <label htmlFor="coupon" className="sr-only">Mã giảm giá</label>
                          <input type="text" id="coupon" placeholder="Mã giảm giá" />
                          <button className="btn-apply">Áp dụng</button>
                        </form>
                      </div>
                      <div className="cart-update-buttons mt-15 mt-sm-0">
                        <button className="btn-clear-cart" onClick={clearCart} disabled={cart.length === 0}>Xóa giỏ hàng</button>
                        <Link to="/shop" className="btn-update-cart">Tiếp tục mua sắm</Link>
                      </div>
                    </div>
            </div>
          </div>
          <div className="col-lg-4">
            {/* Cart Calculate Area */}
            <div className="cart-calculate-area mt-sm-40 mt-md-60">
              <h5 className="cal-title">Tổng giỏ hàng</h5>
              <div className="cart-cal-table table-responsive">
                <table className="table table-borderless">
                    <tbody>
                    <tr className="cart-sub-total">
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
                      <tr className="order-total">
                        <th>Tổng cộng</th>
                        <td><b>${total.toFixed(2)}</b></td>
                      </tr>
                  </tbody></table>
              </div>
                  <div className="proceed-checkout-btn">
                    <button className="btn btn-brand d-block w-100" onClick={handleCheckout} disabled={cart.length === 0}>
                      Tiến hành thanh toán
                    </button>
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
export default Cart;