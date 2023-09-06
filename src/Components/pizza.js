import { useState } from 'react'

export const Pizza = (props) => {

   
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')

    const [size, setSize] = useState('')
    const [topping1, setTopping1] = useState(false)
    const [topping2, setTopping2] = useState(false)
    const [topping3, setTopping3] = useState(false)
    const [topping4, setTopping4] = useState(false)
    const [special, setSpecial] = useState('')
    

    const handleNameChange = (e) => {
        const newName = e.target.value
        setName(newName)
        setNameError('name must be at least 2 characters')
    }

    const handleSizeChange = (e) => {
        setSize(e.target.value)
    }

    const handleTopping1Change = (e) => {
        setTopping1(e.target.checked)
    }

    const handleTopping2Change = (e) => {
        setTopping2(e.target.checked)
    }

    const handleTopping3Change = (e) => {
        setTopping3(e.target.checked)
    }

    const handleTopping4Change = (e) => {
        setTopping4(e.target.checked)
    }

    const handleSpecialInstruction = (e) => {
        const newSpecialInstruction = e.target.value
        setSpecial(newSpecialInstruction)
    }

    const validateName = () => {
        if (name.length < 2) {
            setNameError('name must be at least 2 characters')
            return false
        }
        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(validateName()) {
         const formData = {
            name,
            size,
            topping1,
            topping2,
            topping3,
            topping4,
            special,
         }   
         console.log('New order submitted: ', formData)
        }
    
    }
 return (

        <div>
       <form id="pizza-form" onSubmit={handleSubmit}>
        <div>
            <h2>Order Online</h2>
            <label>Name:
        <input 
            id="name-input"
            name='name'
            type='text'
            value={name}
            placeholder='type a name for the order'
            maxLength='20'
            onChange={handleNameChange}
           /></label>
            </div>
            <div>
        <label>Size: 
            <select id="size-dropdown" name="size" value={size} onChange={handleSizeChange}>
                <option value=''>--Select a Size--</option>
                <option value='personal'>Personal</option>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
            </select>
        </label></div>
        <div>
           <label>Pepperoni<input type="checkbox" name="topping1" checked={topping1} onChange={handleTopping1Change} /></label>
           <label>Cheese<input type="checkbox" name="topping2" checked={topping2} onChange={handleTopping2Change} /></label>
           <label>Anchovies<input type="checkbox" name="topping3" checked={topping3} onChange={handleTopping3Change}/></label>
           <label>Mushrooms<input type="checkbox" name="topping4" checked={topping4}onChange={handleTopping4Change} ></input></label>
        </div>
        <div>
            <label>Special instructions:</label>
            <input name="special" type="text" placeholder="type order notes here" id="special-text" value={special} onChange={handleSpecialInstruction}></input>
        </div>
        <div>
            <button id="order-button" type="submit">Add to Order</button>
        </div>
       
       </form>
       {nameError && <div className="error">{nameError}</div>}
       </div>
    )
}