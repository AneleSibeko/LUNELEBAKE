import React from 'react';

const CardHistory = () => {
  return (
    <div>
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            background-color: #fff7f0;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 900px;
            margin: 40px auto;
            padding: 20px;
          }
          h2 {
            text-align: center;
            color: #1373e0;
          }
          .history-card {
            background-color: transparent;
            border: 1px solid #fff;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }
          .card-info {
            flex: 1;
          }
          .card-info p {
            margin: 5px 0;
            color: #555;
          }
          .card-info span {
            font-weight: bold;
            color: #1373e0;
          }
          .price {
            font-size: 1.2rem;
            font-weight: bold;
            color: #1373e0;
          }
        `}
      </style>

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

      <div className="container">
        <h2>Lunele Bakes - Order History</h2>

        {/* Placeholder card 1 */}
        <div className="history-card">
          <div className="card-info">
            <p>Order ID: <span>#12345</span></p>
            <p>Product: <span>Chocolate Chip Scones</span></p>
            <p>Date: <span>2025-11-10</span></p>
          </div>
          <div className="price">R45.00</div>
        </div>

        {/* Placeholder card 2 */}
        <div className="history-card">
          <div className="card-info">
            <p>Order ID: <span>#12346</span></p>
            <p>Product: <span>Blueberry Scones</span></p>
            <p>Date: <span>2025-11-12</span></p>
          </div>
          <div className="price">R50.00</div>
        </div>

        {/* Placeholder card 3 */}
        <div className="history-card">
          <div className="card-info">
            <p>Order ID: <span>#12347</span></p>
            <p>Product: <span>Vanilla Scones</span></p>
            <p>Date: <span>2025-11-14</span></p>
          </div>
          <div className="price">R40.00</div>
        </div>
      </div>
    </div>
  );
};

export default CardHistory;
