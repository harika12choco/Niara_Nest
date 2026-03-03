import React from 'react';
import { useCart } from '../context/CartContext';
import '../styles/ProductCard.css';
import img from '../assets/img.jpg';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import img4 from '../assets/img4.jpg';


const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const productImages = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
};


  return (
    <div className="product-card">
      <div className="product-image">
        <img 
         src={productImages[product.id] || img}

          alt={product.name} 
          className="product-img" 
        />
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <p className="product-price">₹ {product.price}</p>

        <button 
          className="add-to-cart-btn"
         onClick={() =>
  addToCart({
    ...product,
    image: productImages[product.id] || img
  })
}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

