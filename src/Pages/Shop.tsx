import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Shop = () => {
    const { addToCart } = useCart()

    const handleAddToCart = (e: React.MouseEvent, product: { id: number; name: string; price: number; image: string }) => {
        e.preventDefault()
        e.stopPropagation()
        addToCart(product)
        alert(`${product.name} đã được thêm vào giỏ hàng!`)
    }

    const products = [
      { id: 1, name: 'Bộ Côn & Phanh Tự Động', price: 165.00, image: '/assets/img/product/product-6.png', secondaryImage: '/assets/img/product/product-7.png', sale: '25%' },
      { id: 2, name: 'Vành 17 inch 8 Lug', price: 235.00, image: '/assets/img/product/product-2.png', secondaryImage: '/assets/img/product/product-3.png' },
      { id: 3, name: 'Hệ Thống Hút Khí', price: 125.00, image: '/assets/img/product/product-4.png', secondaryImage: '/assets/img/product/product-5.png', sale: '35%' },
      { id: 4, name: 'Vô Lăng Bọc Da', price: 25.00, image: '/assets/img/product/product-11.png', secondaryImage: '/assets/img/product/product-10.png', sale: '15%' },
      { id: 5, name: 'Đĩa Phanh', price: 165.00, image: '/assets/img/product/product-13.png', secondaryImage: '/assets/img/product/product-7.png' },
      { id: 6, name: 'Vành 18 inch 8 Lug', price: 235.00, image: '/assets/img/product/product-3.png', secondaryImage: '/assets/img/product/product-2.png', sale: '25%' },
      { id: 7, name: 'Hệ Thống Hút Turbo', price: 125.00, image: '/assets/img/product/product-7.png', secondaryImage: '/assets/img/product/product-9.png' },
      { id: 8, name: 'Vô Lăng Thể Thao', price: 25.00, image: '/assets/img/product/product-12.png', secondaryImage: '/assets/img/product/product-13.png', sale: '11%' },
    ]

    return (
        <div>
  {/*== Start Page Header Area ==*/}
  <div className="page-header-wrap bg-img" data-bg="/assets/img/bg/page-header-bg.jpg">
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
          <div className="page-header-content">
            <div className="page-header-content-inner">
              <h1>Cửa Hàng</h1>
              <ul className="breadcrumb">
                <li><Link to="/">Trang Chủ</Link></li>
                <li className="current">Cửa Hàng</li>
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
    <div className="shop-page-action-bar mb-30">
      <div className="container container-wide">
        <div className="action-bar-inner">
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
                <label htmlFor="sort" className="sr-only">Sắp xếp theo</label>
                <select name="sort" id="sort">
                  <option value="sbp">Sắp xếp theo độ phổ biến</option>
                  <option value="sbn">Sắp xếp theo mới nhất</option>
                  <option value="sbt">Sắp xếp theo xu hướng</option>
                  <option value="sbr">Sắp xếp theo đánh giá</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="shop-page-product">
      <div className="container container-wide">
        <div className="product-wrapper product-layout layout-grid">
          <div className="row mtn-30">
            {products.map(product => (
              <div className="col-sm-6 col-lg-4 col-xl-3" key={product.id}>
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
                      <span className="price"><strong>Giá:</strong> ${product.price.toFixed(2)}</span>
                    </div>
                    <div className="product-item__action">
                      <button className="btn-add-to-cart" onClick={(e) => handleAddToCart(e, { id: product.id, name: product.name, price: product.price, image: product.image })}><i className="ion-bag" /></button>
                      <button className="btn-add-to-cart"><i className="ion-ios-loop-strong" /></button>
                      <button className="btn-add-to-cart"><i className="ion-ios-heart-outline" /></button>
                      <button className="btn-add-to-cart"><i className="ion-eye" /></button>
                    </div>
                    <div className="product-item__desc">
                      <p>Theo đuổi sự hài lòng một cách hợp lý sẽ mang lại những kết quả cực kỳ giá trị. Không ai yêu thích hoặc theo đuổi nỗi đau cho chính nó, mà vì đôi khi những cơ hội mới sẽ xuất hiện.</p>
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
      </div>
    </div>
    <div className="shop-page-action-bar mt-30">
      <div className="container container-wide">
        <div className="action-bar-inner">
          <div className="row align-items-center">
            <div className="col-sm-6">
              <nav className="pagination-wrap mb-10 mb-sm-0">
                <ul className="pagination">
                  <li className="active"><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#"><i className="ion-ios-arrow-thin-right" /></a></li>
                </ul>
              </nav>
            </div>
            <div className="col-sm-6 text-center text-sm-end">
              <p>Hiển thị 1–{products.length} trong số 26 kết quả</p>
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
export default Shop;