
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SuperMarketList from "./pages/SuperMarketList";
import ProductsList from "./pages/ProductsList";
import RSS from "./pages/RSS";
import HomePage from "./pages/HomePage";
import logo from "/images/logo.jpg";
import Footer from "./components/Footer";
import MobileMenu from "./components/MobileMenu";
import "./styles.css";

function App() {
  useEffect(() => {
    console.log("useEffect triggered");
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function () {
      const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;

      menuToggle.setAttribute('aria-expanded', !expanded);
      menu.style.display = expanded ? 'none' : 'block';
    });
  }, []);

  <HomePage />

  return (
    <BrowserRouter>
      <>
        <h2 style={{ color: "greenyellow", fontSize: '24px', fontWeight: 'bold' }}>Canahorro</h2>
        <div className="logo-container">
          <img src={logo} className="logo-image" alt="Logo" />
        </div>

        <MobileMenu />

        <Routes>
          <Route path="/rss" element={<RSS />} />
          <Route path="/product-list" element={<ProductsList />} />
          <Route path="/market-list" element={<SuperMarketList />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
      </>
    </BrowserRouter>
  );
}

export default App;
