import React, { useState } from 'react';

// Define a separate component for the individual order card for clarity
const OrderCard = ({ order }) => {
    // Determine if the amount should be shown based on payment status
    const showAmount = order.paymentStatus === 'Paid' || order.paymentStatus === 'Processing';

    return (
        <div className="order-card">
            <h3>Order #{order.id}</h3>
            <p><strong>Date:</strong> {order.date}</p>
            <p><strong>Items:</strong> {order.items}</p>
            
            {/* Conditional Rendering: Show Total only if payment is made or in process */}
            {showAmount && (
                <p><strong>Total:</strong> {order.total}</p>
            )}

            <p><strong>Status:</strong> {order.status}</p>
            <p><strong>Payment Status:</strong> {order.paymentStatus}</p>
        </div>
    );
};

const OrderHistory = () => {
    // State for product selection (from your image)
    const [selectedProduct, setSelectedProduct] = useState('Cake');
    const [totalAmount, setTotalAmount] = useState('R350');

    // Dummy product data for the dropdown
    const productData = {
        'Cake': 'R350',
        'Milk Tart': 'R80',
        'Plain Scones': 'R15',
    };

    // Handler for when the product selection changes
    const handleProductChange = (event) => {
        const product = event.target.value;
        setSelectedProduct(product);
        setTotalAmount(productData[product] || 'R0');
    };

    // --- UPDATED Order Data with PaymentStatus ---
    const orders = [
        {
            id: '001',
            date: 'October 15, 2023',
            items: '2 x Plain Scones, 1 x Raisin Scones',
            total: 'R50',
            status: 'Delivered',
            paymentStatus: 'Paid' // Amount will be shown
        },
        {
            id: '002',
            date: 'October 20, 2023',
            items: '1 x Milk Tart, 1 x Plain Scones',
            total: 'R20',
            status: 'In Progress',
            paymentStatus: 'Processing' // Amount will be shown
        },
        {
            id: '003',
            date: 'October 25, 2023',
            items: '1 x Birthday Cake',
            total: 'R400',
            status: 'Pending',
            paymentStatus: 'Awaiting Payment' // Amount will NOT be shown
        }
    ];
    // ---------------------------------------------

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
                <div className="auth-buttons">
                    <button className="btn btn-outline">Sign Out</button>
                </div>
            </nav>

            <main className="content-container">
                <section className="order-summary">
                    <h2>Order History</h2>
                    
                    <div className="product-selection-controls">
                        <label htmlFor="product-select">Choose a product:</label>
                        <select
                            id="product-select"
                            value={selectedProduct}
                            onChange={handleProductChange}
                        >
                            {Object.keys(productData).map((product) => (
                                <option key={product} value={product}>
                                    {product}
                                </option>
                            ))}
                        </select>
                    </div>

                    <p>Selected Product: <strong>{selectedProduct}</strong></p>
                    <p>Total Amount: <strong>{totalAmount}</strong></p>
                </section>

                <hr/> 

                <section className="order-history-list">
                    <h3>Recent Orders</h3>
                    
                    {/* Map through the orders and use the OrderCard component */}
                    {orders.map((order) => (
                        <OrderCard key={order.id} order={order} />
                    ))}
                    
                </section>
            </main>

            <footer className="footer">
                <p>© 2025 Lunele Bakes. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default OrderHistory;