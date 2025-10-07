import React from 'react';

const Profile = () => {
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
        <div className="profile-header">
          <h2>John Doe</h2>
        </div>
        
        <div className="profile-info">
          <h3>Personal Information</h3>
          
          <div className="profile-details">
            <div>
              <p><strong>Username:</strong> John Doe</p>
              <button className="btn btn-outline" style={{marginTop: '0.5rem'}}>Edit</button>
            </div>
            
            <div>
              <p><strong>Email:</strong> johndoe07@gmail.com</p>
              <button className="btn btn-outline" style={{marginTop: '0.5rem'}}>Edit</button>
            </div>
            
            <div>
              <p><strong>Password:</strong> *******</p>
              <button className="btn btn-outline" style={{marginTop: '0.5rem'}}>Edit</button>
            </div>
          </div>
        </div>
        
        <div className="profile-info">
          <h3>Recent Orders</h3>
          <p>You haven't placed any orders yet.</p>
          <button className="btn btn-primary" style={{marginTop: '1rem'}}>Browse Products</button>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Lunele Bakes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Profile;