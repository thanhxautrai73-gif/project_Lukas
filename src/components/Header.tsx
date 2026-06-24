import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useCart } from '../context/CartContext'

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const { cart, removeFromCart, getTotalItems, getTotalPrice } = useCart()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const activeStyle = {
      color: '#eeb644',
      position: 'relative' as const,
    }

    const renderLink = (to: string, label: string, end = false) => (
      <NavLink 
        to={to} 
        end={end}
        style={({ isActive }) => isActive ? activeStyle : {}}
      >
        {({ isActive }) => (
          <>
            {label}
            {isActive && (
              <span style={{
                position: 'absolute',
                bottom: '-5px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '5px',
                height: '5px',
                backgroundColor: '#eeb644',
                borderRadius: '50%'
              }}></span>
            )}
          </>
        )}
      </NavLink>
    )

    return (

<header style={{
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: 9999,
  backgroundColor: '#fff',
  width: '100%',
}} className={`header-area ${isScrolled ? 'scrolled' : ''}`}>
  <div className="container container-wide">
    <div className="row align-items-center">
      <div className="col-sm-4 col-lg-2">
        <div className="site-logo text-center text-sm-start">
          <Link to="/"><img src="/assets/img/logo.png" alt="Logo" /></Link>
        </div>
      </div>
      <div className="col-lg-7 d-none d-lg-block">
        <div className="site-navigation">
          <ul className="main-menu nav">
            <li className="has-submenu">
              {renderLink("/", "Trang Chủ", true)}
              <ul className="sub-menu">
                <li>{renderLink("/", "Trang Chủ 1", true)}</li>
                <li>{renderLink("/home1", "Trang Chủ 2")}</li>
                <li>{renderLink("/home-box-layout", "Bố Cục Hộp")}</li>
              </ul>
            </li>
            <li>{renderLink("/about", "Giới Thiệu")}</li>
            <li className="has-submenu">
              {renderLink("/shop", "Cửa Hàng")}
              <ul className="sub-menu">
                <li>{renderLink("/shop-left-sidebar", "Cửa Hàng Thanh Bên Trái")}</li>
                <li>{renderLink("/shop-right-sidebar", "Cửa Hàng Thanh Bên Phải")}</li>
                <li>{renderLink("/single-product", "Chi Tiết Sản Phẩm")}</li>
              </ul>
            </li>
            <li className="has-submenu">
              {renderLink("/blog", "Tin Tức")}
              <ul className="sub-menu">
                <li>{renderLink("/blog-left-sidebar", "Tin Tức Thanh Bên Trái")}</li>
                <li>{renderLink("/blog", "Tin Tức Thanh Bên Phải")}</li>
                <li>{renderLink("/blog-details", "Chi Tiết Tin Tức")}</li>
                <li>{renderLink("/blog-details-sidebar", "Chi Tiết Tin Tức Thanh Bên")}</li>
              </ul>
            </li>
            <li>{renderLink("/gallery", "Bộ Sưu Tập")}</li>
            <li className="has-submenu">
              {renderLink("/pages", "Trang")}
              <ul className="sub-menu">
                <li>{renderLink("/cart", "Giỏ Hàng")}</li>
                <li>{renderLink("/checkout", "Thanh Toán")}</li>
                <li>{renderLink("/wishlist", "Danh Sách Yêu Thích")}</li>
                <li>{renderLink("/login", "Đăng Nhập")}</li>
                <li>{renderLink("/register", "Đăng Ký")}</li>
              </ul>
            </li>
            <li>{renderLink("/contact", "Liên Hệ")}</li>
          </ul>
        </div>
      </div>
      <div className="col-sm-8 col-lg-3">
        <div className="site-action d-flex justify-content-center justify-content-sm-end align-items-center">
          <ul className="login-reg-nav nav">
            <li>{renderLink("/login", "Đăng Nhập")}</li>
            <li>{renderLink("/register", "Đăng Ký")}</li>
          </ul>
          <div className="mini-cart-wrap">
            <Link to="/cart" className="btn-mini-cart">
              <i className="ion-bag" />
              <span className="cart-total">{getTotalItems()}</span>
            </Link>
            <div className="mini-cart-content">
              <div className="mini-cart-product">
                {cart.length > 0 ? (
                  cart.map(item => (
                    <div className="mini-product" key={item.id}>
                      <div className="mini-product__thumb">
                        <Link to="/single-product"><img src={item.image} alt={item.name} /></Link>
                      </div>
                      <div className="mini-product__info">
                        <h2 className="title"><Link to="/single-product">{item.name}</Link></h2>
                        <div className="mini-calculation">
                          <p className="price">{item.quantity} x <span>${item.price.toFixed(2)}</span></p>
                          <button className="remove-pro" onClick={() => removeFromCart(item.id)}><i className="ion-trash-b" /></button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-center">Giỏ hàng của bạn đang trống</p>
                )}
              </div>
              {cart.length > 0 && (
                <div className="mini-cart-footer">
                  <div className="cart-subtotal">
                    <span>Tổng phụ:</span>
                    <span className="total-price">${getTotalPrice().toFixed(2)}</span>
                  </div>
                  <div className="cart-action">
                    <Link to="/cart" className="btn btn-brand">Xem Giỏ Hàng</Link>
                    <Link to="/checkout" className="btn btn-brand">Thanh Toán</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="responsive-menu d-lg-none">
            <button className="btn-menu">
              <i className="fa fa-bars" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>



    )
}
export default Header;