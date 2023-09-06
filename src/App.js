import React, { useState, useEffect } from "react"
import { Routes, Route, Link } from 'react-router-dom'
import { Pizza } from './Components/pizza'




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
 
  return (
   <div>
    <h1>Basic Pizza</h1>
      <nav>
        <Link to="/">Menu </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/pizza">Order Pizza</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/pizza" element={<Pizza />}/>
      </Routes>
    
   </div>
  )
};

export default App;
