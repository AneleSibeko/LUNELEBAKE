import React from 'react';

const CardDetails = () => {
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

      <section className="profile">
        <h2>Payment Methods</h2>
        
        <div className="profile-info">
          <h3>Saved Cards</h3>
          <p>You haven't saved any payment methods yet.</p>
        </div>
        
        <div className="form-container">
          <h3>Add New Card</h3>
          
          <div className="form-group">
            <label>Card Number</label>
            <input type="text" placeholder="1234 5678 9012 3456" />
          </div>
          
          <div style={{display: 'flex', gap: '1rem'}}>
            <div className="form-group" style={{flex: 1}}>
              <label>Expiry Date</label>
              <input type="text" placeholder="MM/YY" />
            </div>
            
            <div className="form-group" style={{flex: 1}}>
              <label>CVV</label>
              <input type="text" placeholder="123" />
            </div>
          </div>
          
          <div className="form-group">
            <label>Cardholder Name</label>
            <input type="text" placeholder="John Doe" />
          </div>
          
          <button className="btn btn-primary" style={{width: '100%'}}>Save Card</button>
        </div>
      </section>

      <footer className="footer">
        <p>© 2023 Lunele Bakes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CardDetails;