import React, { useState } from "react"
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom'
import { Pizza } from './Components/Pizza.js'
import Header from "./Components/Header"
import './App.css'



const initialFormValues = {
  name: '',
  size: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
  special: '',
}

const Menu = () => {
  return <div id="menu-container">
    <div><h2 id="menu-header">Menu</h2></div>
    <div><h3>Red Sauce Pizza with choice of toppings: </h3></div>
    <div><h4>Cheese</h4></div>
    <div><h4>Pepperoni</h4></div>
    <div><h4>Anchovies</h4></div>
    <div><h4>Mushrooms</h4></div>
  </div>
}

const App = () => {
  const [showHeader, setShowHeader] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()


  const handleLinkClick = () => {
    setShowHeader(false)
    navigate("/pizza")
  }
 
  return (
   <div>
     {showHeader && <Header />}
     <div>
      <nav>
        {location.pathname !== "/" &&
        (<Link to="/" id="menu-link" onClick={()=> setShowHeader(true)}>Menu{" "} </Link>
        )}
      </nav>
     </div>
      <nav>
       {location.pathname !== "/pizza" &&
        (<Link to="/pizza" id="order-pizza" onClick={handleLinkClick}>Order Pizza</Link>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/pizza" element={<Pizza />}/>
      </Routes>
    
   </div>
  )
};

export default App;
