import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import Home from "./Pages/Home/Home";
import Cart from "./Pages/Cart/Cart";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from "./Components/Footer/Footer";
import LoginPopup from "./Components/LoginPopup/LoginPopup";

// استيراد مكتبة AOS
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // مدة الأنيميشن (1 ثانية)
  }, []);

  return (
    <>
      {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
