
import React from 'react';

const About = () => {
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

        <h2>About Us - Lunele Bakes</h2>
        <p>A Taste of Home in Every Bite</p>
        
        <div className="about-content">
          <p>Lunele Bakes was born out of a simple love for baking and the desire to share that warm, homemade feeling with everyone. What started as a passion for experimenting in the kitchen turned into a mission to offer freshly baked scones that are affordable, flavorful, and made with heart.</p>
          
          <p>We noticed a gap between supermarket scones—often mass-produced and dry—and high-end bakery goods that were either overpriced or lacked variety. So, we decided to change that. At Lunele Bakes, we specialize in classic and gourmet scone flavors, using quality ingredients and crafting each batch with care.</p>
          
          <p>From the comforting taste of plain scones to exciting flavors like lemon poppy seed or blueberry, there's something for every scone lover.</p>
        </div>

        <div className="about-content">
          <div className="about-card">
            <h3>Freshness</h3>
            <p>Baked daily, no shortcuts.</p>
          </div>
          <div className="about-card">
            <h3>Affordability</h3>
            <p>High-quality taste at a price you'll love.</p>
          </div>
          <div className="about-card">
            <h3>Innovation</h3>
            <p>New flavors added regularly.</p>
          </div>
          <div className="about-card">
            <h3>Community</h3>
            <p>We're more than a bakery; we're your friendly neighborhood treat spot.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Lunele Bakes. All rights reserved.</p>
        <p>Email: <a href="mailto:LuneleBakes@gmail.com">LuneleBakes@gmail.com</a></p>
      </footer>
    </div>
  );
};

export default About;