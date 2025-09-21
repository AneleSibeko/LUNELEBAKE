// components/OrderHistory.js
import React, { useState } from 'react';

const orders = [
  { id: 1, product: 'Cake', amount: 200 },
  { id: 2, product: 'Bread', amount: 50 },
  { id: 3, product: 'Cookies', amount: 100 },
];

const OrderHistory = () => {
  const [selectedOrder, setSelectedOrder] = useState(orders[0].id);
  const total = orders.reduce((sum, o) => sum + o.amount, 0);

  return (
    <div>
      <h2>Order History</h2>
      <label htmlFor="order-select">Choose a product:</label>
      <select
        id="order-select"
        value={selectedOrder}
        onChange={e => setSelectedOrder(Number(e.target.value))}
      >
        {orders.map(order => (
          <option key={order.id} value={order.id}>
            {order.product}
          </option>
        ))}
      </select>
      <div style={{ marginTop: '1em' }}>
        <strong>Selected Product:</strong> {orders.find(o => o.id === selectedOrder).product}
      </div>
      <div>
        <strong>Total Amount:</strong> R{total}
      </div>
    </div>
  );
};

export default OrderHistory;
