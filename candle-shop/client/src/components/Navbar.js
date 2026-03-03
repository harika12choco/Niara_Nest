import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Navbar.css';
import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";

const Navbar = () => {
  const { toggleCart, getTotalItems } = useCart();

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
   <li><Link to="/about">About Us</Link></li>

        <li><Link to="/gifting">Gifting</Link></li>
      </ul>
      
      <Link to="/" className="logo">
        <span className="logo-icon"></span>
        <span>Niara Nest</span>
      </Link>
      
   <div className="nav-icons">
  <button className="icon-btn">
    <FaSearch />
  </button>

  <button className="icon-btn">
    <FaUser />
  </button>

  <button className="icon-btn cart-btn" onClick={toggleCart}>
    <FaShoppingBag />
    {getTotalItems() > 0 && (
      <span className="cart-count">{getTotalItems()}</span>
    )}
  </button>
</div>
    </nav>
  );
};

export default Navbar;
