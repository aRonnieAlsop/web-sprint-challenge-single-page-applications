import React, { useState } from "react"
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { Pizza } from './Components/pizza'
import Header from "./Components/Header"




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
  return <div>
    <div><h2>--Menu--</h2></div>
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

  const handleLinkClick = () => {
    setShowHeader(false)
    navigate("/pizza")
  }
 
  return (
   <div>
     {showHeader && <Header />}
      <nav>
        <Link to="/" onClick={()=> setShowHeader(true)}>Menu{" "} </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/pizza" id="order-pizza" onClick={handleLinkClick}>Order Pizza</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/pizza" element={<Pizza />}/>
      </Routes>
    
   </div>
  )
};

export default App;
