import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { createOrder } from '../utils/api';
import '../styles/Cart.css';

const Cart = () => {
  const { 
    cart, 
    isCartOpen, 
    toggleCart, 
    removeFromCart, 
    updateQuantity,
    clearCart,
    getTotalPrice 
  } = useCart();

  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = async () => {
    if (cart.length === 0) {
      alert('Your cart is empty!');
      return;
    }

    setIsCheckingOut(true);

    try {
      const orderData = {
        items: cart.map(item => ({
          id: item.id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        customer: {
          name: 'Guest User', // In production, get from auth
          email: 'guest@example.com'
        },
        total: getTotalPrice()
      };

      const response = await createOrder(orderData);
      
      alert('Order placed successfully! Order ID: ' + response.order.id);
      clearCart();
      toggleCart();
    } catch (error) {
      alert('Error placing order. Please try again.');
      console.error(error);
    } finally {
      setIsCheckingOut(false);
    }
  };

  return (
    <>
      <div 
        className={`cart-overlay ${isCartOpen ? 'show' : ''}`}
        onClick={toggleCart}
      />
      
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h3>Shopping Cart</h3>
          <button className="close-cart" onClick={toggleCart}>×</button>
        </div>

        <div className="cart-items">
          {cart.length === 0 ? (
            <div className="empty-cart">Your cart is empty</div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
               <div className="cart-item-image">
  <img src={item.image} alt={item.name} />
</div>
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">₹ {item.price}</div>
                  <div className="cart-item-quantity">
                    <button 
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button 
                  className="remove-item"
                  onClick={() => removeFromCart(item.id)}
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-total">
              <span>Total:</span>
              <span>₹ {getTotalPrice().toLocaleString()}</span>
            </div>
            <button 
              className="checkout-btn"
              onClick={handleCheckout}
              disabled={isCheckingOut}
            >
              {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
