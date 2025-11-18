import React from 'react';
import { Outlet } from 'react-router-dom'; // Renders the nested route's element
import Navbar from './Navbar'; 

const Layout = () => {
  return (
    <div>
      <Navbar /> 
      
      {/* Outlet renders the matching child route's component 
        (Home, Product, Profile, etc.) 
      */}
      <main className="page-content">
        <Outlet /> 
      </main>

      {/* Footer component (optional, but good practice) */}
      <footer className="footer">
        <p>© 2025 Lunele Bakes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;