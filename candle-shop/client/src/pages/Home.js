import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../utils/api';
import '../styles/Home.css';
import hero from '../assets/hero.jpg';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data.slice(0, 6));
    } catch (error) {
      console.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const scrollToShop = () => {
    document.getElementById('bestsellers')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">

      {/* HERO SECTION */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${hero})` }}
      >
        <div className="hero-content">
          <h1>
            Handcrafted Candles<br />
            for Calm Moments<br />
            & Beautiful Spaces
          </h1>

          <button className="shop-btn" onClick={scrollToShop}>
            Shop Now
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="feature-card">
          <h3>Customizable Candles</h3>
          <p>Create your perfect candle</p>
        </div>
        <div className="feature-card">
          <h3>Perfect for Gifting</h3>
          <p>Thoughtful & elegant gifts</p>
        </div>
        <div className="feature-card">
          <h3>Premium Fragrances</h3>
          <p>Scents to soothe your soul</p>
        </div>
        <div className="feature-card">
          <h3>Hand-Poured with Love</h3>
          <p>Made in small batches</p>
        </div>
      </section>
       <section className="bestsellers" id="bestsellers">
        <h2 className="section-title">Our Bestsellers</h2>
        
        {loading ? (
          <div className="loading">Loading products...</div>
        ) : (
          <>
            <div className="products-grid">
  {products.slice(0, 3).map(product => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>
            
            <div className="view-all">
              <Link to="/shop">
                <button className="view-all-btn">View All Products →</button>
              </Link>
            </div>
          </>
        )}
      </section>

      {/* Bestsellers */}
      <section className="bestsellers" id="bestsellers">
        <h2 className="section-title">Our Collections</h2>
        
        {loading ? (
          <div className="loading">Loading products...</div>
        ) : (
          <>
            <div className="products-grid">
              {products.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            <div className="view-all">
              <Link to="/shop">
                <button className="view-all-btn">View All Products →</button>
              </Link>
            </div>
          </>
        )}
      </section>
      {/* Contact Section */}
<section className="contact-section">
  <div className="contact-header">
    <h2 className="section-title">Get in Touch</h2>
    <p>We'd love to hear from you</p>
  </div>

  <div className="contact-container">
    <div className="contact-info">
      <h3>visit us</h3>
      <p>Email: niaranest@gmail.com</p>
      <p>Phone: +91 9019988658</p>
    </div>

    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows="5" required />
      <button type="submit" className="submit-btn">
        Send Message
      </button>
    </form>
  </div>
</section>
    </div>
  );
};

export default Home;
