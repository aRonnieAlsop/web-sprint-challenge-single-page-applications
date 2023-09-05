import React, { useState } from "react"
import { Routes, Route, Link } from 'react-router-dom'
import { Pizza } from './Components/pizza'

const Menu = () => {
  return <div>
    <div><h2>--Menu--</h2></div>
    <div><h3>Red Sauce Pizza with choices of toppings: </h3></div>
    <div><h4>Cheese</h4></div>
    <div><h4>Pepperoni</h4></div>
    <div><h4>Anchovies</h4></div>
    <div><h4>Mushrooms</h4></div>
  </div>
}

const App = () => {


  return (
   <div>
    <h1>Simple Pizza Place</h1>
      <nav>
        <Link to="/">Menu </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/pizza">Order Pizza</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/Pizza" element={<Pizza />}/>
      </Routes>
    
   </div>
  )
};

export default App;
