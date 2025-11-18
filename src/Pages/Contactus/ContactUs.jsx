import React from 'react';

const ContactUs = () => {
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

      <section className="contact">
        <h2>Contact Details</h2>
        
        <div className="contact-cards">
          <div className="contact-card">
            <h3>LUYANDA NTOMBELA</h3>
            <p>+27 87 342 4567</p>
            <p>luyandantombela@gmail.com</p>
          </div>
          
          <div className="contact-card">
            <h3>ANELE SIBEKO</h3>
            <p>+27 77 345 234</p>
            <p>anelesibeko@gmail.com</p>
          </div>
          
          <div className="contact-card">
            <h3>LUNELE BAKES</h3>
            <p>+27 84 561 6090</p>
            <p>luneleBakes@gmail.com</p>
            <p>27A Lindhost Street Keniworth, Johannesburg South 2190</p>
            <p>Instagram: Lunelebakery</p>
          </div>
        </div>
        
        <div className="form-container">
          <h3>Send us a message</h3>
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
            <textarea rows="5" placeholder="Your message" style={{width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '4px', fontSize: '1rem'}}></textarea>
          </div>
          <button type="submit"
            className="btn btn-primary"
            style={{ width: "100%", marginBottom: "1rem" }}>
            Send Message
            </button>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Lunele Bakes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ContactUs;