import { Link } from 'react-router-dom'

const ThankYou = () => {
    return (
        <div>
            {/*== Start Page Header Area ==*/}
            <div className="page-header-wrap bg-img" data-bg="/assets/img/bg/page-header-bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="page-header-content">
                                <div className="page-header-content-inner">
                                    <h1>Thank You!</h1>
                                    <ul className="breadcrumb">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="current">Order Complete</li>
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
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="thank-you-content text-center">
                                    {/* Success Icon */}
                                    <div className="success-icon mb-4">
                                        <div style={{
                                            width: '100px',
                                            height: '100px',
                                            borderRadius: '50%',
                                            backgroundColor: '#28a745',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            margin: '0 auto 30px'
                                        }}>
                                            <i className="fa fa-check" style={{ fontSize: '50px', color: '#fff' }}></i>
                                        </div>
                                    </div>
                                    
                                    <h2 className="mb-3">Your Order Has Been Placed Successfully!</h2>
                                    <p className="lead mb-4">
                                        Thank you for shopping with us. We have received your order and will begin processing it right away.
                                    </p>
                                    
                                    {/* Order Details */}
                                    <div className="order-summary-card" style={{
                                        backgroundColor: '#f8f9fa',
                                        borderRadius: '10px',
                                        padding: '30px',
                                        marginBottom: '30px'
                                    }}>
                                        <h4 className="mb-4">Order Summary</h4>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <p className="mb-1"><strong>Order Number:</strong></p>
                                                <p className="text-muted">#ORD-2024-001234</p>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <p className="mb-1"><strong>Order Date:</strong></p>
                                                <p className="text-muted">{new Date().toLocaleDateString('vi-VN')}</p>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <p className="mb-1"><strong>Total Amount:</strong></p>
                                                <p className="text-muted" style={{ fontSize: '20px', color: '#eeb644', fontWeight: 'bold' }}>$299.93</p>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <p className="mb-1"><strong>Payment Method:</strong></p>
                                                <p className="text-muted">Cash on Delivery</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Next Steps */}
                                    <div className="next-steps mb-5">
                                        <h4 className="mb-3">What's Next?</h4>
                                        <ul style={{ listStyle: 'none', padding: 0 }}>
                                            <li className="mb-2">
                                                <i className="fa fa-envelope" style={{ marginRight: '10px', color: '#eeb644' }}></i>
                                                A confirmation email has been sent to your email address.
                                            </li>
                                            <li className="mb-2">
                                                <i className="fa fa-truck" style={{ marginRight: '10px', color: '#eeb644' }}></i>
                                                Your order will be shipped within 2-3 business days.
                                            </li>
                                            <li className="mb-2">
                                                <i className="fa fa-box" style={{ marginRight: '10px', color: '#eeb644' }}></i>
                                                You can track your order status in your account dashboard.
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    {/* Action Buttons */}
                                    <div className="action-buttons">
                                        <Link to="/shop" className="btn btn-brand me-3">Continue Shopping</Link>
                                        <Link to="/pages" className="btn btn-bordered">View Orders</Link>
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

export default ThankYou;