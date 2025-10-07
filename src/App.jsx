// App.js
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './Pages/Context/ThemeContext'; // Updated import path
import ThemeToggle from './Pages/Context/ThemeToggle'; // Updated import path
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import OurStory from './Pages/OurStory/OurStory';
import ContactUs from './Pages/Contactus/ContactUs';
import Signin from './Pages/Auth/Signin/Signin';
import Signup from './Pages/Auth/Signup/Signup';
import Product from './Pages/Product/Product';
import Profile from './Pages/Profile/Profile';
import OrderHistory from './Pages/Order/OrderHistory';
import Help from './Pages/Help/Help';
import CardDetails from './Pages/Card/CardDetails';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ThemeToggle />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/sign-in" element={<Signin />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/help" element={<Help />} />
          <Route path="/card-details" element={<CardDetails />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;