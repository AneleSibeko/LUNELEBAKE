// components/Navbar.js
import React from 'react'; 
import { Link } from 'react-router-dom'; 

const Navbar = () => ( <nav className="navbar"> 

<ul> 
  <li><Link to="/about">About</Link></li> 
  <li><Link to="/our-story">Our Story</Link></li> 
  <li><Link to="/contact-us">Contact Us</Link></li> 
  <li><Link to="/sign-in">Sign-in</Link></li> 
  <li><Link to="/sign-up">Sign-up</Link></li>
  
   <li><Link to="/product">Product</Link></li> 
   <li><Link to="/">Home</Link></li> 
   <li><Link to="/profile">Profile</Link></li> 
   <li><Link to="/order-history">Order History</Link></li> 
   <li><Link to="/card-history">Card History</Link></li> 
   <li><Link to="/help">Help</Link></li> 
   
</ul> 

</nav> 
); 

export default Navbar;