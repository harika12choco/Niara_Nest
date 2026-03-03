import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../utils/api';
import '../styles/Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    filterProducts();
  }, [selectedCategory, products]);

  const loadProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  const filterProducts = () => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === selectedCategory));
    }
  };

  const categories = [
    { value: 'all', label: 'All Candles' },
    { value: 'luxury', label: 'Jar candles' },
    { value: 'sets', label: 'Sets' },
    { value: 'calming', label: 'Bouquet candles' },
    { value: 'energizing', label: 'Wax Sachets' },
    { value: 'sweet', label: 'Mini Candle Bouquets' }
  ];

  return (
    <div className="shop-page">
      <div className="shop-header">
        <h1>Our Collection</h1>
        <p>Discover our handcrafted candles for every mood and moment</p>
      </div>

      <div className="shop-filters">
        {categories.map(cat => (
          <button
            key={cat.value}
            className={`filter-btn ${selectedCategory === cat.value ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="loading">Loading products...</div>
      ) : (
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="no-products">No products found in this category</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Shop;
