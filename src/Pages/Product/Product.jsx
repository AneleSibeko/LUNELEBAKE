import React, { useState } from 'react';
import milkTart from "../../../public/Photo/5c0b28f9-a1d2-466c-8425-3166e3f30ddc.jpeg"

const Product = () => {
  const [quantities, setQuantities] = useState({
    plain: 0,
    raisin: 0,
    milkTart: 0,
    cupcakes: 0,
    brownies: 0,
    donuts: 0
  });

  const updateQuantity = (product, value) => {
    setQuantities({
      ...quantities,
      [product]: Math.max(0, value)
    });
  };

  const calculateTotal = () => {
    return (
      quantities.plain * 15 +
      quantities.raisin * 20 +
      quantities.milkTart * 5 +
      quantities.cupcakes * 15 +
      quantities.brownies * 20 +
      quantities.donuts * 50
    );
  };

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
          <button className="btn btn-outline"><a href="/sign-in">Sign In</a></button>
          <button className="btn btn-primary"><a href="/sign-up">Sign Up</a></button>
        </div>
      </nav>

      <section className="products">
        <h2>Our Products</h2>
        
        
        <div className="product-grid">
          {/* Existing products */}
          <div className="product-card">
            <div className="product-info">
               <img src=".\Photo\d921262b-4e5f-4d20-9ddf-45990a3c6987.jpeg" alt="Milk Tart" style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px'}} />
              <h3>Plain Scones</h3>
              <p>Classic, buttery scones perfect with jam or cream</p>
              <p className="product-price">R15 (pack of 4)</p>
              <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('plain', quantities.plain - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.plain}</span>
                <button onClick={() => updateQuantity('plain', quantities.plain + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-info">
              <img src=".\Photo\406c5597-7758-42e6-afec-18ec338cfa98.jpeg" alt="Milk Tart" style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px'}} />
              <h3>Raisin Scones</h3>
              <p>Sweet scones with plump, juicy raisins</p>
              <p className="product-price">R20 (pack of 4)</p>
              <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('raisin', quantities.raisin - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.raisin}</span>
                <button onClick={() => updateQuantity('raisin', quantities.raisin + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-info">
              <img src=".\Photo\7ecd7fb4-7ca5-443d-8a49-cd7decd1f011.jpeg" alt="Milk Tart" style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px'}} />
              <h3>Milks Tart</h3>
              <p>Traditional South African milk tart with cinnamon</p>
              <p className="product-price">R5 per slice</p>
              <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('milkTart', quantities.milkTart - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.milkTart}</span>
                <button onClick={() => updateQuantity('milkTart', quantities.milkTart + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
            </div>
          </div>

          {/* New products */}
          <div className="product-card">
            <div className="product-info">
               <img src=".\Photo\9199c4d1-4d48-4844-ae87-3b13c7572b33.jpeg" alt="Milk Tart" style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px'}} />
              <h3>Cupcakes</h3>
              <p>Delicious cupcakes for any occasion</p>
              <p className="product-price">R15 each</p>
              <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('cupcakes', quantities.cupcakes - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.cupcakes}</span>
                <button onClick={() => updateQuantity('cupcakes', quantities.cupcakes + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-info">
              <img src=".\Photo\Discover the best brownie recipe that guarantees….jpeg" alt="Milk Tart" style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px'}} />
              <h3>Classic Brownies</h3>
              <p>Rich chocolate brownies (3 pieces per order)</p>
              <p className="product-price">R20</p>
              <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('brownies', quantities.brownies - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.brownies}</span>
                <button onClick={() => updateQuantity('brownies', quantities.brownies + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-info">
              <img src=".\Photo\corissois.webp" alt="Milk Tart" style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px'}} />
              <h3>Crossisonts</h3>
              <p>Classic Crossisonts (3 pieces per order)</p>
              <p className="product-price">R20</p>
              <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('brownies', quantities.brownies - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.brownies}</span>
                <button onClick={() => updateQuantity('brownies', quantities.brownies + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-info">
              <img src=".\Photo\sugar cokkies.webp" alt="Milk Tart" style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px'}} />
              <h3>Sugar Cokkies</h3>
              <p>Delicious sugar cookies per order</p>
              <p className="product-price">R20</p>
              <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-info">
              <img src=".\Photo\Pudding.webp" alt="Milk Tart" style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px'}} />
              <h3>Pudding</h3>
              <p>Six delicious pudding per order</p>
              <p className="product-price">R90</p>
              <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
            </div>
          </div>

          <div className="product-card">
  <div className="product-info">
    <img src=".\Photo\blueberry.webp" alt="Product" style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
    <h3>Blueberry Muffins</h3>
    <p>Fresh muffins packed with blueberries</p>
    <p className="product-price">R25</p>
     <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
  </div>
</div>

<div className="product-card">
  <div className="product-info">
    <img src=".\Photo\chocolate muffins.webp" alt="Product" style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
    <h3>Chocolate Muffins</h3>
    <p>Rich chocolate flavor</p>
    <p className="product-price">R25</p>
     <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
  </div>
</div>

<div className="product-card">
  <div className="product-info">
    <img src=".\Photo\banana bread.webp" alt="Product" style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
    <h3>Banana Bread</h3>
    <p>Moist homemade banana bread</p>
    <p className="product-price">R40</p>
    <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
  </div>
</div>

<div className="product-card">
  <div className="product-info">
    <img src=".\Photo\chocolate cupcake.webp" alt="Product" style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
    <h3>Chocolate Cake Slice</h3>
    <p>Soft chocolate slice</p>
    <p className="product-price">R30</p>
    <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
  </div>
</div>

<div className="product-card">
  <div className="product-info">
    <img src=".\Photo\red veverlt.webp" alt="Product" style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
    <h3>Red Velvet Cake Slice</h3>
    <p>Classic red velvet</p>
    <p className="product-price">R35</p>
    <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
  </div>
</div>

<div className="product-card">
  <div className="product-info">
    <img src=".\Photo\carrot cake.webp" alt="Product" style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
    <h3>Carrot Cake Slice</h3>
    <p>Freshly baked carrot cake</p>
    <p className="product-price">R30</p>
    <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
  </div>
</div>

<div className="product-card">
  <div className="product-info">
    <img src=".\Photo\cokkies.webp" alt="Product" style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
    <h3>Chocolate Chip Cookies</h3>
    <p>6 per pack</p>
    <p className="product-price">R25</p>
   <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
  </div>
</div>

<div className="product-card">
  <div className="product-info">
    <img src=".\Photo\oatmeal.webp" alt="Product" style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
    <h3>Oatmeal Cookies</h3>
    <p>Healthy and soft</p>
    <p className="product-price">R22</p>
    <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
  </div>
</div>

<div className="product-card">
  <div className="product-info">
    <img src=".\Photo\jam t.webp" alt="Product" style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
    <h3>Jam Tartlets</h3>
    <p>Mini tartlets filled with jam</p>
    <p className="product-price">R30</p>
    <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
  </div>
</div>

<div className="product-card">
  <div className="product-info">
    <img src=".\Photo\rolls.webp" alt="Product" style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
    <h3>Cinnamon Rolls</h3>
    <p>Fresh cinnamon rolls</p>
    <p className="product-price">R28</p>
    <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
  </div>
</div>

<div className="product-card">
  <div className="product-info">
    <img src=".\Photo\cheesecake.webp" alt="Product" style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
    <h3>Mini Cheesecakes</h3>
    <p>Per piece</p>
    <p className="product-price">R20</p>
    <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
  </div>
</div>

<div className="product-card">
  <div className="product-info">
    <img src=".\Photo\apple pie.webp" alt="Product" style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
    <h3>Apple Pie Slice</h3>
    <p>Warm homemade pie</p>
    <p className="product-price">R25</p>
    <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
  </div>
</div>

<div className="product-card">
  <div className="product-info">
    <img src=".\Photo\peppermint.webp" alt="Product" style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
    <h3>Peppermint Crisp Tart</h3>
    <p>Classic South African dessert</p>
    <p className="product-price">R35</p>
    <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
  </div>
</div>

<div className="product-card">
  <div className="product-info">
    <img src=".\Photo\lemon.webp" alt="Product" style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
    <h3>Lemon Loaf</h3>
    <p>Zesty and fresh</p>
    <p className="product-price">R40</p>
    <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
  </div>
</div>

<div className="product-card">
  <div className="product-info">
    <img src=".\Photo\marbel cake.webp" alt="Product" style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
    <h3>Marble Cake</h3>
    <p>Swirled chocolate & vanilla</p>
    <p className="product-price">R45</p>
    <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
  </div>
</div>

<div className="product-card">
  <div className="product-info">
    <img src=".\Photo\mini dough bites.webp" alt="Product" style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
    <h3>Mini Dough Bites</h3>
    <p>Small fried dough bites</p>
    <p className="product-price">R20</p>
    <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
  </div>
</div>

<div className="product-card">
  <div className="product-info">
    <img src=".\Photo\vaniella.webp" alt="Product" style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
    <h3>Vanilla Cupcakes</h3>
    <p>Soft & fluffy</p>
    <p className="product-price">R15</p>
    <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
  </div>
</div>

<div className="product-card">
  <div className="product-info">
    <img src=".\Photo\chocolate cupcake.webp" alt="Product" style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
    <h3>Chocolate Cupcakes</h3>
    <p>Rich and moist</p>
    <p className="product-price">R15</p>
    <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
  </div>
</div>

<div className="product-card">
  <div className="product-info">
    <img src=".\Photo\snowball.webp" alt="Product" style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
    <h3>Snowball Treats</h3>
    <p>Coconut coated</p>
    <p className="product-price">R18</p>
    <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
  </div>
</div>

<div className="product-card">
  <div className="product-info">
    <img src=".\Photo\buttermilk.webp" alt="Product" style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
    <h3>Buttermilk Rusks</h3>
    <p>Traditional homemade rusks</p>
    <p className="product-price">R45</p>
    <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
  </div>
</div>

<div className="product-card">
  <div className="product-info">
    <img src=".\Photo\Koeksisters.webp" alt="Product" style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
    <h3>Koeksisters</h3>
    <p>Sweet, sticky treat</p>
    <p className="product-price">R30</p>
    <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
  </div>
</div>

<div className="product-card">
  <div className="product-info">
    <img src=".\Photo\Mini Pancakes.webp" alt="Product" style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
    <h3>Mini Pancakes</h3>
    <p>Small fluffy pancakes</p>
    <p className="product-price">R18</p>
    <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
  </div>
</div>

<div className="product-card">
  <div className="product-info">
    <img src=".\Photo\Chocolate Tart Slice.webp" alt="Product" style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
    <h3>Chocolate Tart Slice</h3>
    <p>Rich chocolate tart</p>
    <p className="product-price">R30</p>
    <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
  </div>
</div>

<div className="product-card">
  <div className="product-info">
    <img src=".\Photo\Berry Tart Slice.webp" alt="Product" style={{width:'100%', height:'150px', objectFit:'cover', borderRadius:'5px'}} />
    <h3>Berry Tart Slice</h3>
    <p>Fresh berry topping</p>
    <p className="product-price">R35</p>
    <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
  </div>
</div>

          <div className="product-card">
            <div className="product-info">
              <img src=".\Photo\ea71c703-a6e7-4c67-af6e-d8ee637a85f9.jpeg" alt="Milk Tart" style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px'}} />
              <h3>Donuts</h3>
              <p>Six delicious donuts per order</p>
              <p className="product-price">R50</p>
              <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
            </div>
          </div>

          <div className="product-card">
            <div className="product-info">
              <img src=".\Photo\cakes.webp" alt="Milk Tart" style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '5px'}} />
              <h3>Cakes</h3>
              <p>Cake</p>
              <p className="product-price">R350</p>
              <div style={{display: 'flex', alignItems: 'center', marginTop: '1rem'}}>
                <button onClick={() => updateQuantity('donuts', quantities.donuts - 1)} style={{padding: '0.3rem 0.8rem', marginRight: '0.5rem'}}>-</button>
                <span>{quantities.donuts}</span>
                <button onClick={() => updateQuantity('donuts', quantities.donuts + 1)} style={{padding: '0.3rem 0.8rem', marginLeft: '0.5rem'}}>+</button>
              </div>
            </div>
          </div>

        </div>

        {/* Order Summary */}
        {calculateTotal() > 0 && (
          <div style={{marginTop: '2rem', textAlign: 'center'}}>
            <h3>Order Summary</h3>
            {quantities.plain > 0 && <p>Plain scones: R15 × {quantities.plain} = R{quantities.plain * 15}</p>}
            {quantities.raisin > 0 && <p>Raisin scones: R20 × {quantities.raisin} = R{quantities.raisin * 20}</p>}
            {quantities.milkTart > 0 && <p>Milk tart: R5 × {quantities.milkTart} = R{quantities.milkTart * 5}</p>}
            {quantities.cupcakes > 0 && <p>Cupcakes: R15 × {quantities.cupcakes} = R{quantities.cupcakes * 15}</p>}
            {quantities.brownies > 0 && <p>Classic Brownies: R20 × {quantities.brownies} = R{quantities.brownies * 20}</p>}
            {quantities.donuts > 0 && <p>Donuts: R50 × {quantities.donuts} = R{quantities.donuts * 50}</p>}
            <h4>Total: R{calculateTotal()}</h4>
            <button className="btn btn-primary" style={{marginTop: '1rem'}}>Checkout</button>
          </div>
        )}
      </section>

      <footer className="footer">
        <p>© 2025 Lunele Bakes. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Product;