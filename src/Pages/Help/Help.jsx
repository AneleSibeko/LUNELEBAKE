import React from 'react';

const Help = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">Lunele Bakes</div>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><a href="/order-history">Order History</a></li>
          <li><a href="/help">Help</a></li>
          <li><a href="/card-details">Card Details</a></li>
        </ul>
        <div className="auth-buttons">
          <button className="btn btn-outline">Sign Out</button>
        </div>
      </nav>

      <section className="about">
        <h2>Help Center</h2>
        
        <div className="about-content">
          <div className="about-card">
            <h3>Ordering</h3>
            <p>How to place an order, modify your order, or cancel an order.</p>
          </div>
          
          <div className="about-card">
            <h3>Payment</h3>
            <p>Information about payment methods, refunds, and pricing.</p>
          </div>
          
          <div className="about-card">
            <h3>Delivery</h3>
            <p>Delivery options, timeframes, and tracking your order.</p>
          </div>
          
          <div className="about-card">
            <h3>Account</h3>
            <p>Managing your account, password reset, and privacy settings.</p>
          </div>
        </div>
        
        <div className="form-container" style={{marginTop: '3rem'}}>
          <h3>Still need help? Contact us!</h3>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your name" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Your email" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea rows="5" placeholder="How can we help you?" style={{width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem'}}></textarea>
          </div>
          <button className="btn btn-primary" style={{width: '100%'}}>Send Message</button>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Lunele Bakes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Help;