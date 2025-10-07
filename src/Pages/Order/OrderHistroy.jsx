import React from 'react';

const OrderHistory = () => {
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

      <section className="order-history">
        <h2>Order History</h2>
        
        <div className="order-card">
          <h3>Order #001</h3>
          <p><strong>Date:</strong> October 15, 2023</p>
          <p><strong>Items:</strong> 2 x Plain Scones, 1 x Raisin Scones</p>
          <p><strong>Total:</strong> R50</p>
          <p><strong>Status:</strong> Delivered</p>
        </div>
        
        <div className="order-card">
          <h3>Order #002</h3>
          <p><strong>Date:</strong> October 20, 2023</p>
          <p><strong>Items:</strong> 1 x Milk Tart, 1 x Plain Scones</p>
          <p><strong>Total:</strong> R20</p>
          <p><strong>Status:</strong> In Progress</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Lunele Bakes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default OrderHistory;