import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const SingleProduct = () => {
    const { addToCart } = useCart()
    const [quantity, setQuantity] = useState(1)

    const product = {
      id: 103,
      name: 'Camera 4K Treo',
      price: 325.00,
      image: '/assets/img/product/product-4.png'
    }

    const handleAddToCart = () => {
      // Add to cart with the specified quantity
      for (let i = 0; i < quantity; i++) {
        addToCart(product)
      }
      alert(`${quantity} ${product.name} đã được thêm vào giỏ hàng!`)
    }

    const increment = (e: React.MouseEvent) => {
      e.preventDefault()
      setQuantity(prev => prev + 1)
    }

    const decrement = (e: React.MouseEvent) => {
      e.preventDefault()
      setQuantity(prev => Math.max(1, prev - 1))
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
              <h1>Chi Tiết Sản Phẩm</h1>
              <ul className="breadcrumb">
                <li><Link to="/">Trang Chủ</Link></li>
                <li><Link to="/shop">Cửa Hàng</Link></li>
                <li className="current">Chi Tiết Sản Phẩm</li>
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
    <div className="product-details-page-content">
      <div className="container container-wide">
        <div className="row">
          <div className="col-12">
            <div className="row">
              {/* Start Product Thumbnail Area */}
              <div className="col-md-5">
                <div className="product-thumb-area">
                  <div className="product-details-thumbnail">
                    <div className="product-thumbnail-slider" id="thumb-gallery">
                      <figure className="pro-thumb-item" data-mfp-src="/assets/img/product/product-details-1.png">
                        <img src="/assets/img/product/product-details-1.png" alt="Product Details" />
                      </figure>
                      <figure className="pro-thumb-item" data-mfp-src="/assets/img/product/product-details-2.png">
                        <img src="/assets/img/product/product-details-2.png" alt="Product Details" />
                      </figure>
                      <figure className="pro-thumb-item" data-mfp-src="/assets/img/product/product-details-3.png">
                        <img src="/assets/img/product/product-details-3.png" alt="Product Details" />
                      </figure>
                    </div>
                  </div>
                  <div className="product-details-thumbnail-nav">
                    <figure className="pro-thumb-item">
                      <img src="/assets/img/product/product-1.png" alt="Product Details" />
                    </figure>
                    <figure className="pro-thumb-item">
                      <img src="/assets/img/product/product-2.png" alt="Product Details" />
                    </figure>
                    <figure className="pro-thumb-item">
                      <img src="/assets/img/product/product-3.png" alt="Product Details" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* End Product Thumbnail Area */}
              {/* Start Product Info Area */}
              <div className="col-md-7">
                <div className="product-details-info-content-wrap">
                  <div className="prod-details-info-content">
                    <h2>{product.name}</h2>
                    <h5 className="price"><strong>Giá:</strong> <span className="price-amount">${product.price.toFixed(2)}</span>
                    </h5>
                    <p>Theo đuổi sự hài lòng một cách hợp lý sẽ mang lại những kết quả cực kỳ giá trị. Không ai yêu thích hoặc theo đuổi nỗi đau cho chính nó, mà vì đôi khi những cơ hội mới sẽ xuất hiện.</p>
                    <div className="product-config">
                      <div className="table-responsive">
                        <table className="table table-bordered">
                          <tbody><tr>
                              <th className="config-label">Màu sắc</th>
                              <td className="config-option">
                                <div className="config-color">
                                  <a href="#" onClick={(e) => e.preventDefault()}>Đen</a>
                                  <a href="#" onClick={(e) => e.preventDefault()}>Xanh dương</a>
                                  <a href="#" onClick={(e) => e.preventDefault()}>Xanh lá</a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th className="config-label">Kích thước</th>
                              <td className="config-option">
                                <div className="config-color">
                                  <a href="#" onClick={(e) => e.preventDefault()}>Lớn</a>
                                  <a href="#" onClick={(e) => e.preventDefault()}>Vừa</a>
                                  <a href="#" onClick={(e) => e.preventDefault()}>Nhỏ</a>
                                </div>
                              </td>
                            </tr>
                          </tbody></table>
                      </div>
                    </div>
                    <div className="product-action">
                      <div className="action-top d-sm-flex">
                        <div className="pro-qty mr-3 mb-4 mb-sm-0" style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', width: 'fit-content' }}>
                          <button 
                            type="button"
                            className="qty-btn"
                            onClick={decrement} 
                            style={{ border: 'none', background: '#f8f8f8', padding: '5px 15px', fontSize: '20px', cursor: 'pointer' }}
                          >-</button>
                          <input 
                            type="text" 
                            id="quantity" 
                            title="Quantity" 
                            value={quantity} 
                            readOnly 
                            style={{ width: '50px', textAlign: 'center', border: 'none', padding: '5px 0', fontWeight: 'bold' }} 
                          />
                          <button 
                            type="button"
                            className="qty-btn"
                            onClick={increment} 
                            style={{ border: 'none', background: '#f8f8f8', padding: '5px 15px', fontSize: '20px', cursor: 'pointer' }}
                          >+</button>
                        </div>
                        <button className="btn btn-brand" onClick={handleAddToCart}>Thêm vào giỏ</button>
                      </div>
                    </div>
                    <div className="product-meta">
                      <span className="sku_wrapper">Mã sản phẩm: <span className="sku">N/A</span></span>
                      <span className="posted_in">Danh mục:
                        <Link to="/shop"> Bán chạy,</Link>
                        <Link to="/shop"> Phụ tùng,</Link>
                        <Link to="/shop"> Cửa hàng</Link>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Product Info Area */}
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
export default SingleProduct;