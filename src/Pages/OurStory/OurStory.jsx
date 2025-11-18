import React from 'react';

const OurStory = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">Lunele Bakes</div>
        <ul className="nav-links">
          <li><a href="/about">About Us</a></li>
          <li><a href="/our-story">Our Story</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
          <li><a href="/sign-in">Sign-in</a></li> 
          <li><a href="/sign-up">Sign-up</a></li>
        </ul>
        <div className="auth-buttons">
          <button className="btn btn-outline"><a href="/sign-in">Sign In</a></button>
          <button className="btn btn-primary"><a href="/sign-up">Sign Up</a></button>
        </div>
      </nav>

      <section className="about">
        <h2>Our Story – Lunele Bakes</h2>
        
        <div className="about-content" style={{maxWidth: '800px', margin: '0 auto', textAlign: 'left'}}>
          <p>Lunele Bakes began as a simple dream—just two curious home bakers inspired by cooking shows and the comforting smell of warm scones. What started in a tiny kitchen with lots of flour, laughter, and a few burnt batches quickly turned into something much bigger: a passion for sharing baked goods that feel like home.</p>
          
          <p>We were tired of dry, store-bought scones that lacked flavor, and disappointed by pricey options that didn't satisfy. So, we rolled up our sleeves, mixed up our favorite recipes, and started baking for friends, family, and eventually… for you.</p>
          
          <p>Every scone we make is a reminder of why we started—to bring you freshly baked, affordable, and delicious scones with just the right balance of softness, crunch, and comfort.</p>
          
          <p>Whether you're grabbing a quick breakfast or treating yourself to a midday snack, Lunele Bakes is here to add a little warmth to your day.</p>
          
          <p>From our kitchen to your heart—thank you for being part of our journey.</p>
          
          <p>The name Lunele comes from our names (Luyanda and Anele).</p>
        </div>

        <div style={{marginTop: '3rem', display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'}}>
          <div className="about-card">
            <h3>Our Beginning</h3>
            <p>Started in a small home kitchen with a passion for baking</p>
          </div>
          
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>To provide affordable, high-quality baked goods with homemade taste</p>
          </div>
          
          <div className="about-card">
            <h3>Our Future</h3>
            <p>Planning to expand with a physical location and more products</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Lunele Bakes. All rights reserved.</p>
        <p>Email: <a href="mailto:LuneleBakes@gmail.com">LuneleBakes@gmail.com</a></p>
        <p>Follow us on Instagram: <a href="https://instagram.com/Lunelebkery">@Lunelebkery</a></p>
      </footer>
    </div>
  );
};

export default OurStory;