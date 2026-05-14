import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Shop_Left_Sidebar = () => {
    const { addToCart } = useCart();

    const handleAddToCart = (e: React.MouseEvent, product: { id: number; name: string; price: number; image: string }) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product);
        alert(`${product.name} has been added to your cart!`);
    };

    const products = [
      { id: 1, name: 'Auto Clutch & Brake', price: 165.00, image: '/assets/img/product/product-6.png', secondaryImage: '/assets/img/product/product-7.png', sale: '25%' },
      { id: 2, name: '17 INCH RIMS 8 LUG', price: 235.00, image: '/assets/img/product/product-2.png', secondaryImage: '/assets/img/product/product-3.png' },
      { id: 3, name: 'AIR INTAKE SYSTEM', price: 125.00, image: '/assets/img/product/product-4.png', secondaryImage: '/assets/img/product/product-5.png', sale: '35%' },
      { id: 4, name: 'LEATHER STEERING WHEEL', price: 25.00, image: '/assets/img/product/product-11.png', secondaryImage: '/assets/img/product/product-10.png', sale: '15%' },
      { id: 5, name: 'Brake Disc Plate', price: 165.00, image: '/assets/img/product/product-13.png', secondaryImage: '/assets/img/product/product-7.png' },
      { id: 6, name: '18 INCH RIMS 8 LUG', price: 235.00, image: '/assets/img/product/product-3.png', secondaryImage: '/assets/img/product/product-2.png', sale: '25%' },
      { id: 7, name: 'Turbo Intake System', price: 125.00, image: '/assets/img/product/product-7.png', secondaryImage: '/assets/img/product/product-9.png' },
      { id: 8, name: 'Sport Steering Wheel', price: 25.00, image: '/assets/img/product/product-12.png', secondaryImage: '/assets/img/product/product-13.png', sale: '11%' },
      { id: 9, name: 'LEATHER STEERING WHEEL', price: 25.00, image: '/assets/img/product/product-11.png', secondaryImage: '/assets/img/product/product-10.png', sale: '15%' },
    ];

    const recentProducts = [
        { id: 10, name: 'Injected humour', price: 799.99, image: '/assets/img/product/product-1.png' },
        { id: 11, name: 'Classical literature', price: 599.99, oldPrice: 799.99, image: '/assets/img/product/product-2.png' },
        { id: 12, name: 'Classical literature', price: 649.99, oldPrice: 799.99, image: '/assets/img/product/product-3.png' },
    ];

    return (
        <div>
  {/*== Start Page Header Area ==*/}
  <div className="page-header-wrap bg-img" data-bg="/assets/img/bg/page-header-bg.jpg">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <div className="page-header-content">
            <div className="page-header-content-inner">
              <h1>Shop Left Sidebar</h1>
              <ul className="breadcrumb">
                <li><Link to="/">Home</Link></li>
                <li className="current">Shop</li>
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
    <div className="container container-wide">
      <div className="row">
        <div className="col-lg-3 order-1 order-lg-0">
          <div className="sidebar-area">
            <div className="sidebar-item">
              <h4 className="sidebar-title">Filter By Color</h4>
              <div className="sidebar-body">
                <ul className="sidebar-list">
                  <li><Link to="/shop">Black <span>(2)</span></Link></li>
                  <li><Link to="/shop">Blue <span>(3)</span></Link></li>
                  <li><Link to="/shop">Green <span>(6)</span></Link></li>
                </ul>
              </div>
            </div>
            <div className="sidebar-item">
              <h4 className="sidebar-title">Recent Products</h4>
              <div className="sidebar-body">
                {recentProducts.map(product => (
                  <div className="sidebar-product" key={product.id}>
                    <Link to="/single-product" className="image"><img src={product.image} alt={product.name} /></Link>
                    <div className="content">
                      <Link to="/single-product" className="title">{product.name}</Link>
                      <span className="price">${product.price.toFixed(2)} {product.oldPrice && <span className="old">${product.oldPrice.toFixed(2)}</span>}</span>
                      <div className="ratting">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star-half-o" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="sidebar-item">
              <h4 className="sidebar-title">Product categories</h4>
              <div className="sidebar-body">
                <ul className="sidebar-list">
                  <li><Link to="/shop">All Product</Link></li>
                  <li><Link to="/shop">Best Seller</Link></li>
                  <li><Link to="/shop">Car</Link></li>
                  <li><Link to="/shop">Parts</Link></li>
                  <li><Link to="/shop">Shop</Link></li>
                  <li><Link to="/shop">Tayer</Link></li>
                  <li><Link to="/shop">Uncategorized</Link></li>
                </ul>
              </div>
            </div>
            <div className="sidebar-item">
              <h4 className="sidebar-title">Product tags</h4>
              <div className="sidebar-body">
                <ul className="tags">
                  <li><Link to="/shop">Car</Link></li>
                  <li><Link to="/shop">Parts</Link></li>
                  <li><Link to="/shop">Shop</Link></li>
                  <li><Link to="/shop">Tayer</Link></li>
                  <li><Link to="/shop">Seat</Link></li>
                  <li><Link to="/shop">Engine</Link></li>
                  <li><Link to="/shop">Parts</Link></li>
                  <li><Link to="/shop">Fuel</Link></li>
                  <li><Link to="/shop">Modern</Link></li>
                  <li><Link to="/shop">Brake</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-9 order-0 order-lg-1">
          <div className="action-bar-inner mb-30">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <div className="shop-layout-switcher mb-15 mb-sm-0">
                  <ul className="layout-switcher nav">
                    <li data-layout="grid" className="active"><i className="fa fa-th" /></li>
                    <li data-layout="list"><i className="fa fa-th-list" /></li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="sort-by-wrapper">
                  <label htmlFor="sort" className="sr-only">Sort By</label>
                  <select name="sort" id="sort">
                    <option value="sbp">Sort By Popularity</option>
                    <option value="sbn">Sort By Newest</option>
                    <option value="sbt">Sort By Trending</option>
                    <option value="sbr">Sort By Rating</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="product-wrapper product-layout layout-grid">
            <div className="row mtn-30">
              {products.map(product => (
                <div className="col-sm-6 col-lg-4" key={product.id}>
                  <div className="product-item">
                    <div className="product-item__thumb">
                      <Link to="/single-product">
                        <img className="thumb-primary" src={product.image} alt={product.name} />
                        <img className="thumb-secondary" src={product.secondaryImage} alt={product.name} />
                      </Link>
                      <div className="ratting">
                        <span><i className="ion-android-star" /></span>
                        <span><i className="ion-android-star" /></span>
                        <span><i className="ion-android-star" /></span>
                        <span><i className="ion-android-star" /></span>
                        <span><i className="ion-android-star-half" /></span>
                      </div>
                    </div>
                    <div className="product-item__content">
                      <div className="product-item__info">
                        <h4 className="title"><Link to="/single-product">{product.name}</Link></h4>
                        <span className="price"><strong>Price:</strong> ${product.price.toFixed(2)}</span>
                      </div>
                      <div className="product-item__action">
                        <button className="btn-add-to-cart" onClick={(e) => handleAddToCart(e, product)}><i className="ion-bag" /></button>
                        <button className="btn-add-to-cart"><i className="ion-ios-loop-strong" /></button>
                        <button className="btn-add-to-cart"><i className="ion-ios-heart-outline" /></button>
                        <button className="btn-add-to-cart"><i className="ion-eye" /></button>
                      </div>
                      <div className="product-item__desc">
                        <p>Pursue pleasure rationally encounter consequences that are extremely painful.
                          Nor
                          again is there anyone who loves or pursues or desires to obtain pain of
                          itself,
                          because it is pain, but because occasionally circles</p>
                      </div>
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
          <div className="action-bar-inner mt-30">
            <div className="row align-items-center">
              <div className="col-sm-6">
                <nav className="pagination-wrap mb-10 mb-sm-0">
                  <ul className="pagination">
                    <li className="active"><Link to="/shop">1</Link></li>
                    <li><Link to="/shop">2</Link></li>
                    <li><Link to="/shop">3</Link></li>
                    <li><Link to="/shop"><i className="ion-ios-arrow-thin-right" /></Link></li>
                  </ul>
                </nav>
              </div>
              <div className="col-sm-6 text-center text-sm-end">
                <p>Showing 1–{products.length} of 26 results</p>
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
export default Shop_Left_Sidebar;