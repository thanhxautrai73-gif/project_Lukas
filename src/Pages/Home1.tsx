import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Home1 = () => {
    const [activeSlide] = useState(0)
    const { addToCart } = useCart()

    const handleAddToCart = (e: React.MouseEvent, product: { id: number; name: string; price: number; image: string }) => {
        e.preventDefault()
        e.stopPropagation()
        addToCart(product)
        alert(`${product.name} has been added to your cart!`)
    }

    const bestSellers = [
      { id: 101, name: 'Auto Clutch & Brake', price: 165.00, image: '/assets/img/product/product-1.png', secondaryImage: '/assets/img/product/product-2.png', sale: '25%' },
      { id: 102, name: 'Leather Steering Wheel', price: 615.00, image: '/assets/img/product/product-3.png', secondaryImage: '/assets/img/product/product-4.png' },
      { id: 103, name: 'Hanging 4K Camera', price: 65.00, image: '/assets/img/product/product-4.png', secondaryImage: '/assets/img/product/product-5.png', sale: '35%' },
      { id: 104, name: '17 inch Rims 8 Lug', price: 165.00, image: '/assets/img/product/product-2.png', secondaryImage: '/assets/img/product/product-1.png' },
      { id: 105, name: 'Locking Hub Diagram', price: 165.00, image: '/assets/img/product/product-5.png', secondaryImage: '/assets/img/product/product-4.png', sale: '21%' },
    ]

    const allProducts = [
        { id: 111, name: 'Auto Clutch & Brake', price: 165.00, image: '/assets/img/product/product-6.png', secondaryImage: '/assets/img/product/product-7.png', sale: '25%' },
        { id: 112, name: 'Leather Steering Wheel', price: 615.00, image: '/assets/img/product/product-8.png', secondaryImage: '/assets/img/product/product-9.png' },
        { id: 113, name: 'Hanging 4K Camera', price: 65.00, image: '/assets/img/product/product-7.png', secondaryImage: '/assets/img/product/product-14.png', sale: '35%' },
        { id: 114, name: '17 inch Rims 8 Lug', price: 165.00, image: '/assets/img/product/product-10.png', secondaryImage: '/assets/img/product/product-5.png' },
        { id: 115, name: 'Locking Hub Diagram', price: 165.00, image: '/assets/img/product/product-11.png', secondaryImage: '/assets/img/product/product-4.png', sale: '21%' },
        { id: 116, name: 'Hanging 4K Camera', price: 65.00, image: '/assets/img/product/product-13.png', secondaryImage: '/assets/img/product/product-12.png', sale: '35%' },
        { id: 117, name: '17 inch Rims 8 Lug', price: 165.00, image: '/assets/img/product/product-14.png', secondaryImage: '/assets/img/product/product-8.png' },
        { id: 118, name: 'Locking Hub Diagram', price: 165.00, image: '/assets/img/product/product-15.png', secondaryImage: '/assets/img/product/product-4.png', sale: '21%' },
        { id: 119, name: 'Auto Clutch & Brake', price: 165.00, image: '/assets/img/product/product-12.png', secondaryImage: '/assets/img/product/product-2.png', sale: '25%' },
        { id: 120, name: 'Leather Steering Wheel', price: 615.00, image: '/assets/img/product/product-9.png', secondaryImage: '/assets/img/product/product-4.png' },
    ]

    return (
       <div>
  {/*== Start Slider Area Wrapper ==*/}
  <div className="slider-area-wrapper home-2">
    <div className="slider-content-active">
      <div className={`slider-slide-item bg-img ${activeSlide === 0 ? 'active' : ''}`} style={{ backgroundImage: "url('/assets/img/slider/slider-2-bg.jpg')" }}>
        <div className="container container-wide h-100">
          <div className="row align-items-center h-100">
            <div className="col-lg-6 order-1 order-lg-0">
              <div className="slide-content">
                <div className="slide-content-inner">
                  <h3>NEW TECHNOLOGY &amp; BUILD</h3>
                  <h2>LATEST &amp; POWERFUL ENGINE FOR YOU</h2>
                  <Link className="btn btn-white" to="/shop">Shop Now</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-0 order-lg-1">
              <div className="slide-img">
                <img src="/assets/img/slider/slider-2-2.png" alt="Slider" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`slider-slide-item bg-img ${activeSlide === 1 ? 'active' : ''}`} style={{ backgroundImage: "url('/assets/img/slider/slider-2-bg.jpg')" }}>
        <div className="container container-wide h-100">
          <div className="row align-items-center h-100">
            <div className="col-lg-6 order-1 order-lg-0">
              <div className="slide-content">
                <div className="slide-content-inner">
                  <h3>NEW TECHNOLOGY &amp; BUILD</h3>
                  <h2>WHEELS &amp; TIRES <br /> COLLECTIONS</h2>
                  <Link className="btn btn-white" to="/shop">Shop Now</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-0 order-lg-1">
              <div className="slide-img">
                <img src="/assets/img/slider/slider-2-1.png" alt="Slider" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="slider-dots-arrow-area">
      <div className="container container-wide">
        <div className="slider-dots-arrow">
        </div>
      </div>
    </div>
  </div>
  {/*== End Slider Area Wrapper ==*/}
  {/*== Start Banner Area Wrapper ==*/}
  <div className="banner-area-wrapper sm-top">
    <div className="container container-wide">
      <div className="row mtn-30">
        <div className="col-md-6 col-lg-4">
          <div className="banner-item">
            <div className="banner-item__img">
              <Link to="/shop"><img src="/assets/img/banner/banner-9.jpg" alt="Banner" /></Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="banner-item">
            <div className="banner-item__img">
              <Link to="/shop"><img src="/assets/img/banner/banner-2.jpg" alt="Banner" /></Link>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="banner-item">
            <div className="banner-item__img">
              <Link to="/shop"><img src="/assets/img/banner/banner-10.jpg" alt="Banner" /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*== End Banner Area Wrapper ==*/}
  {/*== Start Best Seller Products Area ==*/}
  <div className="best-seller-products-area sm-top">
    <div className="container container-wide">
      <div className="row">
        <div className="col-lg-5 m-auto text-center">
          <div className="section-title">
            <h2 className="h3">Best Seller</h2>
            <p>All best seller product are now available for you and your can buy
              this product from here any time any where so sop now</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="product-wrapper">
            <div className="product-carousel">
              {bestSellers.map(product => (
                <div className="product-item" key={product.id}>
                  <div className="product-item__thumb">
                    <Link to="/single-product">
                      <img className="thumb-primary" src={product.image} alt={product.name} />
                      <img className="thumb-secondary" src={product.secondaryImage} alt={product.name} />
                    </Link>
                  </div>
                  <div className="product-item__content">
                    <div className="ratting">
                      <span><i className="ion-android-star" /></span>
                      <span><i className="ion-android-star" /></span>
                      <span><i className="ion-android-star" /></span>
                      <span><i className="ion-android-star" /></span>
                      <span><i className="ion-android-star-half" /></span>
                    </div>
                    <h4 className="title"><Link to="/single-product">{product.name}</Link></h4>
                    <span className="price"><strong>Price:</strong> ${product.price.toFixed(2)}</span>
                  </div>
                  <div className="product-item__action">
                    <button className="btn-add-to-cart" onClick={(e) => handleAddToCart(e, { id: product.id, name: product.name, price: product.price, image: product.image })}><i className="ion-bag" /></button>
                    <button className="btn-add-to-cart"><i className="ion-ios-loop-strong" /></button>
                    <button className="btn-add-to-cart"><i className="ion-ios-heart-outline" /></button>
                    <button className="btn-add-to-cart"><i className="ion-eye" /></button>
                  </div>
                  {product.sale && (
                    <div className="product-item__sale">
                      <span className="sale-txt">{product.sale}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*== End Best Seller Products Area ==*/}
  {/*== Start Flash Deals Area ==*/}
  <div className="flash-deals-area home-2 bg-img" style={{ backgroundImage: "url('/assets/img/bg/deal-bg-2.jpg')" }}>
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-5 col-lg-6">
          <div className="flash-deals-thumb text-center text-md-start">
            <img src="/assets/img/extra/chair.png" alt="Deals" />
          </div>
        </div>
        <div className="col-md-7 col-lg-6 text-center">
          <div className="flash-deals-content">
            <h2>FLASH DEALS</h2>
            <h3>HURRY UP AND GET 25% DISCOUNT</h3>
            <Link to="/cart" className="btn btn-brand">Add to cart</Link>
            <div className="deals-countdown-area">
              <div className="ht-countdown" data-date="9/20/2023" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*== End Flash Deals Area ==*/}
  {/*== Start Call to Action Area ==*/}
  <div className="call-to-action-area sm-top">
    <div className="container">
      <div className="row">
        <div className="col-md-4 col-lg-4">
          <div className="call-to-action-item mt-0">
            <div className="call-to-action-item__icon">
              <img src="/assets/img/icons/icon-1.png" alt="fast delivery" />
            </div>
            <div className="call-to-action-item__info">
              <h3>Free Home Delivery</h3>
              <p>Provide free home delivery
                for all product over $100</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-4">
          <div className="call-to-action-item">
            <div className="call-to-action-item__icon">
              <img src="/assets/img/icons/icon-2.png" alt="quality" />
            </div>
            <div className="call-to-action-item__info">
              <h3>Quality Products</h3>
              <p>We ensure our product
                quality all times</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-lg-4">
          <div className="call-to-action-item">
            <div className="call-to-action-item__icon">
              <img src="/assets/img/icons/icon-3.png" alt="return" />
            </div>
            <div className="call-to-action-item__info">
              <h3>Online Support</h3>
              <p>To satisfy our customer we try
                to give support online</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*== End Call to Action Area ==*/}
  {/*== Start Promotion Code Banner Area ==*/}
  <div className="promotion-code-area-wrapper sm-top">
    <div className="container container-wide">
      <div className="row">
        <div className="col-md-6">
          <div className="promotion-code-banner-item mb-sm-30">
            <img src="/assets/img/banner/banner-7.jpg" alt="Banner" />
          </div>
        </div>
        <div className="col-md-6">
          <div className="promotion-code-banner-item">
            <img src="/assets/img/banner/banner-8.jpg" alt="Banner" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*== End Promotion Code Banner Area ==*/}
  {/*== Start Products Area Wrapper ==*/}
  <div className="products-area-wrapper sm-top">
    <div className="container container-wide">
      <div className="row">
        <div className="col-lg-5 m-auto text-center">
          <div className="section-title">
            <h2 className="h3">All Of Our Products</h2>
            <p>All best seller product are now available for you and your can buy
              this product from here any time any where so sop now</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="product-wrapper columns-5">
            {allProducts.map(product => (
              <div className="col" key={product.id}>
                <div className="product-item">
                  <div className="product-item__thumb">
                    <Link to="/single-product">
                      <img className="thumb-primary" src={product.image} alt={product.name} />
                      <img className="thumb-secondary" src={product.secondaryImage} alt={product.name} />
                    </Link>
                  </div>
                  <div className="product-item__content">
                    <div className="ratting">
                      <span><i className="ion-android-star" /></span>
                      <span><i className="ion-android-star" /></span>
                      <span><i className="ion-android-star" /></span>
                      <span><i className="ion-android-star" /></span>
                      <span><i className="ion-android-star-half" /></span>
                    </div>
                    <h4 className="title"><Link to="/single-product">{product.name}</Link></h4>
                    <span className="price"><strong>Price:</strong> ${product.price.toFixed(2)}</span>
                  </div>
                  <div className="product-item__action">
                    <button className="btn-add-to-cart" onClick={(e) => handleAddToCart(e, { id: product.id, name: product.name, price: product.price, image: product.image })}><i className="ion-bag" /></button>
                    <button className="btn-add-to-cart"><i className="ion-ios-loop-strong" /></button>
                    <button className="btn-add-to-cart"><i className="ion-ios-heart-outline" /></button>
                    <button className="btn-add-to-cart"><i className="ion-eye" /></button>
                  </div>
                  {product.sale && (
                    <div className="product-item__sale">
                      <span className="sale-txt">{product.sale}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*== End Products Area Wrapper ==*/}
  {/*== Start Call to action Wrapper ==*/}
  <div className="call-to-action-area sm-top">
    <div className="call-to-action-content-area home-2 bg-img" style={{ backgroundImage: "url('/assets/img/bg/bg-2.jpg')" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="call-to-action-txt">
              <h2>ALL KINDS OF PARTS THAT YOU <br /> NEED CAN FIND HERE</h2>
              <Link to="/shop" className="btn btn-brand">Shop Now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="call-to-action-image-area">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <img src="/assets/img/bg/bg-car.png" alt="Car" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*== End Call to action Wrapper ==*/}
  {/*== Start Newsletter Area ==*/}
  <div className="newsletter-area-wrapper home--2 mt-0">
    <div className="container container-wide">
      <div className="newsletter-area-inner bg-img" style={{ backgroundImage: "url('/assets/img/bg/newsletter-bg-2.jpg')" }}>
        <div className="row">
          <div className="col-lg-8 m-lg-auto col-xl-5 offset-xl-6">
            <div className="newsletter-content text-center">
              <h4>SPECIAL <span>OFFER</span> FOR SUBSCRIPTION</h4>
              <h2>GET INSTANT DISCOUNT FOR MEMBERSHIP</h2>
              <p>Subscribe our newsletter and all latest news of our <br />latest product, promotion and offers
              </p>
              <div className="newsletter-form-wrap">
                <form action="#" method="post" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-content">
                    <input type="email" placeholder="Enter your email here" />
                    <button className="btn-newsletter">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*== End Newsletter Area ==*/}
  {/*== Start Brand Logo Area Wrapper ==*/}
  <div className="brand-logo-area sm-top sm-bottom">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="brand-logo-content">
            <div className="brand-logo-item">
              <a href="#" onClick={(e) => e.preventDefault()}><img src="/assets/img/brand-logo/brand-1.png" alt="Logo" /></a>
            </div>
            <div className="brand-logo-item">
              <a href="#" onClick={(e) => e.preventDefault()}><img src="/assets/img/brand-logo/brand-2.png" alt="Logo" /></a>
            </div>
            <div className="brand-logo-item">
              <a href="#" onClick={(e) => e.preventDefault()}><img src="/assets/img/brand-logo/brand-3.png" alt="Logo" /></a>
            </div>
            <div className="brand-logo-item">
              <a href="#" onClick={(e) => e.preventDefault()}><img src="/assets/img/brand-logo/brand-4.png" alt="Logo" /></a>
            </div>
            <div className="brand-logo-item">
              <a href="#" onClick={(e) => e.preventDefault()}><img src="/assets/img/brand-logo/brand-5.png" alt="Logo" /></a>
            </div>
            <div className="brand-logo-item">
              <a href="#" onClick={(e) => e.preventDefault()}><img src="/assets/img/brand-logo/brand-3.png" alt="Logo" /></a>
            </div>
            <div className="brand-logo-item">
              <a href="#" onClick={(e) => e.preventDefault()}><img src="/assets/img/brand-logo/brand-1.png" alt="Logo" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*== End Brand Logo Area Wrapper ==*/}
</div>

    )
}
export default Home1;