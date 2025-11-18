// App.jsx
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './Pages/Context/ThemeContext';
import ThemeToggle from './Pages/Context/ThemeToggle';
import Navbar from './Componets/Navbar/Navbar';
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
import CardHistory from './Pages/Card/CardHistory';

function App() {
  const isLoggedIn = !!localStorage.getItem('authToken');

  return (
    <ThemeProvider>
      <BrowserRouter>

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
          <Route path="/card-history" element={<CardHistory />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;