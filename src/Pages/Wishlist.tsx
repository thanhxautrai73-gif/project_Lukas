import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const Wishlist = () => {
  const { addToCart } = useCart()

  const wishlistProducts = [
    { id: 101, name: 'Metallic cotton dress', price: 29.99, image: '/assets/img/product/product-1.png', inStock: true },
    { id: 102, name: 'Open-knit sweater', price: 39.99, image: '/assets/img/product/product-2.png', inStock: true },
    { id: 103, name: 'Metallic cotton dress', price: 29.99, image: '/assets/img/product/product-3.png', inStock: false },
    { id: 104, name: 'Open-knit sweater', price: 39.99, image: '/assets/img/product/product-4.png', inStock: true },
    { id: 105, name: 'Metallic cotton dress', price: 29.99, image: '/assets/img/product/product-5.png', inStock: true },
    { id: 106, name: 'Open-knit sweater', price: 39.99, image: '/assets/img/product/product-6.png', inStock: true },
    { id: 107, name: 'Open-knit sweater', price: 39.99, image: '/assets/img/product/product-7.png', inStock: true },
  ]

  const handleAddToCart = (product: any) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    })
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
              <h1>Wishlist</h1>
              <ul className="breadcrumb">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li className="current">Wishlist</li>
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
    <div className="wishlist-page-content-wrap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="shopping-cart-list-area">
              <div className="shopping-cart-table table-responsive">
                <table className="table table-bordered text-center mb-0">
                  <thead>
                    <tr>
                      <th>Products</th>
                      <th>Price</th>
                      <th>Status</th>
                      <th>Cart</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wishlistProducts.map(product => (
                      <tr key={product.id}>
                        <td className="product-list">
                          <div className="cart-product-item d-flex align-items-center">
                            <div className="remove-icon">
                              <button><i className="fa fa-trash-o" /></button>
                            </div>
                            <Link to="/single-product" className="product-thumb">
                              <img src={product.image} alt={product.name} />
                            </Link>
                            <Link to="/single-product" className="product-name">{product.name}</Link>
                          </div>
                        </td>
                        <td>
                          <span className="price">${product.price.toFixed(2)}</span>
                        </td>
                        <td>
                          <div className="stock-status">
                            {product.inStock ? (
                              <p>In Stock</p>
                            ) : (
                              <p className="text-danger">Stock Out</p>
                            )}
                          </div>
                        </td>
                        <td className="add-cart">
                          <button 
                            className={`btn btn-brand ${!product.inStock ? 'disabled' : ''}`}
                            onClick={() => product.inStock && handleAddToCart(product)}
                            disabled={!product.inStock}
                          >
                            Add to Cart
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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
export default Wishlist;