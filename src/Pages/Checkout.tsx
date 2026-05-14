import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Checkout = () => {
  const navigate = useNavigate()
  const { cart, getTotalPrice, clearCart } = useCart()

  const subtotal = getTotalPrice()
  const shipping = cart.length > 0 ? 10 : 0
  const total = subtotal + shipping

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate order placement
    clearCart()
    navigate('/thank-you')
  }

  if (cart.length === 0) {
    return (
      <div className="page-content-wrapper sp-y">
        <div className="container text-center">
          <h2>Your cart is empty!</h2>
          <p>Please add some products to your cart before checking out.</p>
          <Link to="/shop" className="btn btn-brand mt-3">Go to Shop</Link>
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
              <h1>Checkout</h1>
              <ul className="breadcrumb">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li className="current">Checkout</li>
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
        <form onSubmit={handlePlaceOrder}>
          <div className="row">
            <div className="col-lg-6">
              {/* Checkout Form Area Start */}
              <div className="checkout-billing-details-wrap">
                <h2>Billing Details</h2>
                <div className="billing-form-wrap">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="input-item mt-0">
                          <label htmlFor="f_name" className="sr-only required">First Name</label>
                          <input type="text" id="f_name" placeholder="First Name" required />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="input-item mt-md-0">
                          <label htmlFor="l_name" className="sr-only required">Last Name</label>
                          <input type="text" id="l_name" placeholder="Last Name" required />
                        </div>
                      </div>
                    </div>
                    <div className="input-item">
                      <label htmlFor="email" className="sr-only required">Email Address</label>
                      <input type="email" id="email" placeholder="Email Address" required />
                    </div>
                    <div className="input-item">
                      <label htmlFor="street-address" className="sr-only required">Street address</label>
                      <input type="text" id="street-address" placeholder="Street address Line 1" required />
                    </div>
                    <div className="input-item">
                      <label htmlFor="town" className="sr-only required">Town / City</label>
                      <input type="text" id="town" placeholder="Town / City" required />
                    </div>
                    <div className="input-item">
                      <label htmlFor="phone" className="sr-only">Phone</label>
                      <input type="text" id="phone" placeholder="Phone" required />
                    </div>
                    <div className="input-item">
                      <label htmlFor="ordernote" className="sr-only">Order Note</label>
                      <textarea name="ordernote" id="ordernote" cols={30} rows={3} placeholder="Notes about your order, e.g. special notes for delivery." defaultValue={""} />
                    </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 ml-auto">
              {/* Checkout Page Order Details */}
              <div className="order-details-area-wrap">
                <h2>Your Order</h2>
                <div className="order-details-table table-responsive">
                  <table className="table table-borderless">
                    <thead>
                      <tr>
                        <th>Products</th>
                        <th>Total</th>
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
                        <th>Subtotal</th>
                        <td>${subtotal.toFixed(2)}</td>
                      </tr>
                      <tr className="shipping">
                        <th>Shipping</th>
                        <td>
                          <ul className="shipping-method">
                            <li>
                              <div className="form-check">
                                <input type="radio" id="flat_shipping" name="shipping_method" className="form-check-input" defaultChecked />
                                <label className="form-check-label" htmlFor="flat_shipping">Flat Rate : $10</label>
                              </div>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr className="final-total">
                        <th>Total</th>
                        <td><span className="total-amount">${total.toFixed(2)}</span></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="order-details-footer">
                  <p>Your personal data will be used to process your order, support your experience throughout
                    this website, and for other purposes described in our
                    <a href="#" className="text-warning">privacy policy</a>.
                  </p>
                  <div className="form-check mt-10">
                    <input type="checkbox" id="privacy" className="form-check-input" required />
                    <label htmlFor="privacy" className="form-check-label">I have read and agree to the website terms and conditions</label>
                  </div>
                  <button type="submit" className="btn btn-brand mt-40 w-100">Place Order</button>
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