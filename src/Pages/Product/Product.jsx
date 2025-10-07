import React, { useState } from 'react';

const Product = () => {
  const [quantities, setQuantities] = useState({
    plain: 0,
    raisin: 0,
    milkTart: 0,
    cupcakes: 0,
    brownies: 0,
    donuts: 0
  });

  const updateQuantity = (product, value) => {
    setQuantities({
      ...quantities,
      [product]: Math.max(0, value)
    });
  };

  const calculateTotal = () => {
    return (
      quantities.plain * 15 +
      quantities.raisin * 20 +
      quantities.milkTart * 5 +
      quantities.cupcakes * 15 +
      quantities.brownies * 20 +
      quantities.donuts * 50
    );
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">Lunele Bakes</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/our-story">Our Story</a></li>
          <li><a href="/product">Product</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
        </ul>
        <div className="auth-buttons">
          <button className="btn btn-outline"><a href="/sign-in">Sign In</a></button>
          <button className="btn btn-primary"><a href="/sign-up">Sign Up</a></button>
        </div>
      </nav>

      <section className="products">
        <h2>Our Products</h2>
        
        <div className="product-grid">
          {/* Existing products */}
          <div className="product-card">
            <div className="product-info">
              <h3>Plain Scones</h3>
              <p>Classic, buttery scones perfect with jam or cream</p>
              <p className="product-price">R15 (pack of 4)</p>
              <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('plain', quantities.plain - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.plain}</span>
                <button onClick={() => updateQuantity('plain', quantities.plain + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-info">
              <h3>Raisin Scones</h3>
              <p>Sweet scones with plump, juicy raisins</p>
              <p className="product-price">R20 (pack of 4)</p>
              <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('raisin', quantities.raisin - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.raisin}</span>
                <button onClick={() => updateQuantity('raisin', quantities.raisin + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-info">
              <h3>Milk Tart</h3>
              <p>Traditional South African milk tart with cinnamon</p>
              <p className="product-price">R5 per slice</p>
              <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('milkTart', quantities.milkTart - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.milkTart}</span>
                <button onClick={() => updateQuantity('milkTart', quantities.milkTart + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
            </div>
          </div>

          {/* New products */}
          <div className="product-card">
            <div className="product-info">
              <h3>Cupcakes</h3>
              <p>Delicious cupcakes for any occasion</p>
              <p className="product-price">R15 each</p>
              <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('cupcakes', quantities.cupcakes - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.cupcakes}</span>
                <button onClick={() => updateQuantity('cupcakes', quantities.cupcakes + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-info">
              <h3>Classic Brownies</h3>
              <p>Rich chocolate brownies (3 pieces per order)</p>
              <p className="product-price">R20</p>
              <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('brownies', quantities.brownies - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.brownies}</span>
                <button onClick={() => updateQuantity('brownies', quantities.brownies + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-info">
              <h3>Donuts</h3>
              <p>Six delicious donuts per order</p>
              <p className="product-price">R50</p>
              <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
            </div>
          </div>

        </div>

        {/* Order Summary */}
        {calculateTotal() > 0 && (
          <div style={{marginTop: '2rem', textAlign: 'center'}}>
            <h3>Order Summary</h3>
            {quantities.plain > 0 && <p>Plain scones: R15 × {quantities.plain} = R{quantities.plain * 15}</p>}
            {quantities.raisin > 0 && <p>Raisin scones: R20 × {quantities.raisin} = R{quantities.raisin * 20}</p>}
            {quantities.milkTart > 0 && <p>Milk tart: R5 × {quantities.milkTart} = R{quantities.milkTart * 5}</p>}
            {quantities.cupcakes > 0 && <p>Cupcakes: R15 × {quantities.cupcakes} = R{quantities.cupcakes * 15}</p>}
            {quantities.brownies > 0 && <p>Classic Brownies: R20 × {quantities.brownies} = R{quantities.brownies * 20}</p>}
            {quantities.donuts > 0 && <p>Donuts: R50 × {quantities.donuts} = R{quantities.donuts * 50}</p>}
            <h4>Total: R{calculateTotal()}</h4>
            <button className="btn btn-primary" style={{marginTop: '1rem'}}>Checkout</button>
          </div>
        )}
      </section>

      <footer className="footer">
        <p>© 2025 Lunele Bakes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Product;
