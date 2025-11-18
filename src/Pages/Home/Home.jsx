import React from 'react'

const Home = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">Lunele Bakes</div>
        <ul className="nav-links">
         <li><a href="/">Home</a></li>
          <li><a href="/product">Product</a></li>  
          <li><a href="/profile">Profile</a></li> 
          <li><a href="/order-history">Order History</a></li> 
          <li><a href="/card-history">Card History</a></li> 
          <li><a href="/help">Help</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Delight in Every Bite</h1>
          <p>Discover freshly baked treats that bring a smile to your day</p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Some of Our Favorites</h2>
        <p>Just a glimpse of what is waiting for you</p>
        <div className="product-preview">
          
          <div className="product-card">
            <h3>Classic Scones</h3>
            <p>Fluffy, buttery, and perfect for breakfast or tea time.</p>
          </div>

          <div className="product-card">
            <h3>Raisin Scones</h3>
            <p>Sweet and soft with just the right amount of raisins.</p>
          </div>

          <div className="product-card">
            <h3>Milk Tart</h3>
            <p>A South African classic—creamy, cinnamon-sprinkled, and irresistible.</p>
          </div>

        <div className="product-card">
            <h3>Donuts</h3>
            <p>Sweet, Colourful and a box filled with amazing flavours.</p>
          </div>

        <div className="product-card">
            <h3>Classic Brownies</h3>
            <p>Fluffy, buttery, and perfect for breakfast or tea time.</p>
          </div>

        <div className="product-card">
            <h3>Cupcakes</h3>
            <p>Fluffy, buttery, and perfect for birthdays, and family events.</p>
          </div>   

        </div>
        <button className="cta-button">See All Products</button>
      </section>

      {/* Why Choose Us */}
      <section className="values">
        <h2>Why Lunele Bakes?</h2>
        <div className="value-cards">
          <div className="value-card">
            <h3>Freshness</h3>
            <p>We bake daily to ensure every bite is fresh and delicious.</p>
          </div>
          <div className="value-card">
            <h3>Creativity</h3>
            <p>New flavors and twists added regularly to excite your taste buds.</p>
          </div>
          <div className="value-card">
            <h3>Heart & Soul</h3>
            <p>Every product is made with love, care, and a personal touch.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>Happy Customers</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>"The scones are so soft and flavorful! My go-to bakery every week."</p>
            <h4>- Thandi M.</h4>
          </div>
          <div className="testimonial-card">
            <p>"I love the variety and creativity in their treats. Always a delight!"</p>
            <h4>- Sipho K.</h4>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
