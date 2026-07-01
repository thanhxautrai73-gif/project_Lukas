import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Home1 from "./Pages/Home1";
import HomeBoxlayout from "./Pages/HomeBoxlayout";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import Blog_Detail from "./Pages/Blog_Detail";
import Blog_Details_Sidebar from "./Pages/blog-details-sidebar";
import Blog_Left_Sidebar from "./Pages/blog-left-sidebar";
import Shop from "./Pages/Shop";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Pages from "./Pages/Pages";
import Shop_Left_Sidebar from "./Pages/shop-left-sidebar";
import Shop_Right_Sidebar from "./Pages/shop-right-sidebar";
import SingleProduct from "./Pages/single-product";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Wishlist from "./Pages/Wishlist";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ThankYou from "./Pages/ThankYou";
import AdminDashboard from "./Pages/AdminDashboard";

// Component to handle scroll to top and re-initialize legacy scripts on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Re-initialize active.js scripts after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      if ((window as any).initActiveJs) {
        (window as any).initActiveJs();
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

function App() {
  useEffect(() => {
    console.log("Đang thực hiện lệnh gọi API...");
    fetch("http://localhost:5000/")
      .then((res) => res.text())
      .then((data) => console.log("Dữ liệu nhận được từ Server:", data))
      .catch((err) => console.error("Lỗi:", err));
  }, []);
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Header />
        <div style={{ paddingTop: "80px" }}></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/home-box-layout" element={<HomeBoxlayout />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-left-sidebar" element={<Blog_Left_Sidebar />} />
          <Route path="/blog-details" element={<Blog_Detail />} />
          <Route
            path="/blog-details-sidebar"
            element={<Blog_Details_Sidebar />}
          />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop-left-sidebar" element={<Shop_Left_Sidebar />} />
          <Route path="/shop-right-sidebar" element={<Shop_Right_Sidebar />} />
          <Route path="/single-product" element={<SingleProduct />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/pages" element={<Pages />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
