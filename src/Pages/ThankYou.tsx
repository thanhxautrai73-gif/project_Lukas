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
                                    <h1>Cảm Ơn!</h1>
                                    <ul className="breadcrumb">
                                        <li><Link to="/">Trang Chủ</Link></li>
                                        <li className="current">Đơn Hàng Đã Hoàn Tất</li>
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
                                    
                                    <h2 className="mb-3">Đơn Hàng Của Bạn Đã Được Đặt Thành Công!</h2>
                                    <p className="lead mb-4">
                                        Cảm ơn bạn đã mua sắm tại cửa hàng của chúng tôi. Chúng tôi đã nhận được đơn hàng của bạn và sẽ bắt đầu xử lý ngay lập tức.
                                    </p>
                                    
                                    {/* Order Details */}
                                    <div className="order-summary-card" style={{
                                        backgroundColor: '#f8f9fa',
                                        borderRadius: '10px',
                                        padding: '30px',
                                        marginBottom: '30px'
                                    }}>
                                        <h4 className="mb-4">Tóm Tắt Đơn Hàng</h4>
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <p className="mb-1"><strong>Mã Đơn Hàng:</strong></p>
                                                <p className="text-muted">#ORD-2024-001234</p>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <p className="mb-1"><strong>Ngày Đặt Hàng:</strong></p>
                                                <p className="text-muted">{new Date().toLocaleDateString('vi-VN')}</p>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <p className="mb-1"><strong>Tổng Tiền:</strong></p>
                                                <p className="text-muted" style={{ fontSize: '20px', color: '#eeb644', fontWeight: 'bold' }}>$299.93</p>
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <p className="mb-1"><strong>Phương Thức Thanh Toán:</strong></p>
                                                <p className="text-muted">Thanh toán khi nhận hàng (COD)</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Next Steps */}
                                    <div className="next-steps mb-5">
                                        <h4 className="mb-3">Bước Tiếp Theo?</h4>
                                        <ul style={{ listStyle: 'none', padding: 0 }}>
                                            <li className="mb-2">
                                                <i className="fa fa-envelope" style={{ marginRight: '10px', color: '#eeb644' }}></i>
                                                Một email xác nhận đã được gửi đến địa chỉ email của bạn.
                                            </li>
                                            <li className="mb-2">
                                                <i className="fa fa-truck" style={{ marginRight: '10px', color: '#eeb644' }}></i>
                                                Đơn hàng của bạn sẽ được vận chuyển trong vòng 2-3 ngày làm việc.
                                            </li>
                                            <li className="mb-2">
                                                <i className="fa fa-box" style={{ marginRight: '10px', color: '#eeb644' }}></i>
                                                Bạn có thể theo dõi trạng thái đơn hàng trong bảng điều khiển tài khoản của mình.
                                            </li>
                                        </ul>
                                    </div>
                                    
                                    {/* Action Buttons */}
                                    <div className="action-buttons">
                                        <Link to="/shop" className="btn btn-brand me-3">Tiếp Tục Mua Sắm</Link>
                                        <Link to="/pages" className="btn btn-bordered">Xem Đơn Hàng</Link>
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