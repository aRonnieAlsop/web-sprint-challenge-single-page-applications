import React, { useState, useEffect } from "react"
import { Routes, Route, Link } from 'react-router-dom'
import { Pizza } from './Components/pizza'
import axios from 'axios'


const initialFormValues = {
  name: '',
  size: '',
  pepperoni: false,
  cheese: false,
  mushrooms: false,
  anchovies: false,
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

  const [order, setOrder] = useState([])

const [formValues, setFormValues] = useState(initialFormValues)

  const submitOrder = () => {
    const newOrder = {
        name: formValues.name.trim(),
        size: formValues.size,
        pepperoni: formValues.pepperoni,
        cheese: formValues.cheese,
        mushrooms: formValues.mushrooms,
        anchovies: formValues.anchovies,
  }

  if (!newOrder.name || !newOrder.size) return
  
  axios.post('fakeapi.com', newOrder)
    .then(res => {
        const newOrderToKitchenPrinter = res.data
        setOrder([newOrderToKitchenPrinter, ...order])
        setFormValues(initialFormValues)
    })
}

useEffect(() => {
    axios.get('fakeapi.com').then(res => setOrder(res.data))
}, [])

  return (
   <div>
    <h1>Basic Pizza</h1>
      <nav>
        <Link to="/">Menu </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/pizza">Order Pizza</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/Pizza" element={<Pizza  submit={submitOrder} values={formValues}/>}/>
      </Routes>
    
   </div>
  )
};

export default App;
