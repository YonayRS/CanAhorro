import React, { useState } from "react";
import { Link } from "react-router-dom";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(`Menu is now ${!isOpen ? "open" : "closed"}`);
  };

  return (
    <div className="mobile-menu">
      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-expanded={isOpen} 
      >
        ☰
      </button>
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li><Link to="/home">Inicio</Link></li>
        <li><Link to="/market-list">Supermercados</Link></li>
        <li><Link to="/product-list">Productos</Link></li>
        <li><Link to="/rss">RSS</Link></li>
      </ul>
    </div>
  );
};

export default MobileMenu;
