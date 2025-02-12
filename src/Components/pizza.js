import { useState, useEffect } from 'react'

import './Pizza.css'

export const Pizza = (props) => {

   
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState('')

    const [size, setSize] = useState('')
    const [topping1, setTopping1] = useState(0)
    const [topping2, setTopping2] = useState(0)
    const [topping3, setTopping3] = useState(0)
    const [topping4, setTopping4] = useState(0)
    const [special, setSpecial] = useState('')
    const [glutenFree, setGlutenFree] = useState(0)
    const [sizeError, setSizeError] = useState('')
    const [toppingError, setToppingError] = useState('')
    const [price, setPrice] = useState(0)

    const handleNameChange = (e) => {
        const newName = e.target.value
        setName(newName)
        if (newName.length < 2) {
            setNameError('name must be at least 2 characters')
        } else {
            setNameError('')
        }
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

    const handleGlutenFreeChange = (e) => {
        setGlutenFree(e.target.checked)
    }

    const validateName = () => {
        let isValid = true

        if (name.length < 2) {
            setNameError('name must be at least 2 characters')
            isValid = false
        } else {
            setNameError('')
        }

        if(!size) {
            setSizeError('please select a size')
            isValid = false
        } else {
            setSizeError('')
        }

        if (!(topping1 || topping2 || topping3 || topping4 )) {
            setToppingError('please select at least one topping')
            isValid = false
        } else {
            setToppingError('')
        }
       
        return isValid
    }

    const resetForm = () => {
        setName('')
        setSize('')
        setTopping1('')
        setTopping2('')
        setTopping3('')
        setTopping4('')
        setSpecial('')
        setGlutenFree('')
        setNameError('')
        setSizeError('')
        setToppingError('')
    }

    useEffect(() => {
        let calculatedPrice = 0

        switch (size) {
            case 'personal': 
                calculatedPrice = 8.0;
                break;
            case 'small':
                calculatedPrice = 15.0;
                break;
            case 'medium':
                calculatedPrice = 20.0;
                break;
            case 'large':
                calculatedPrice = 28.0;
                break;
            default:
                break;
        }

        calculatedPrice += (topping1 + topping2 + topping3 + topping4) * 1.5

        if (glutenFree) {
            calculatedPrice = 23.0
            calculatedPrice += (topping1 + topping2 + topping3 + topping4) * 1.5
        }

        setPrice(calculatedPrice) 
    }, [size, topping1, topping2, topping3, topping4, glutenFree])

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
            glutenFree,
         }   
         console.log('New order submitted: ', formData)

         resetForm()
        }   
    }
 return (

        <div>
       <form id="pizza-form" onSubmit={handleSubmit}>
        
        <h2 align="center" className="order-here">Order Here</h2>
        <div></div>
            <div className="order-form-container">   <div>
            <label>Name:    
        <input 
            id="name-input"
            name='name'
            type='text'
            value={name}
            placeholder='type a name for the order'
            maxLength='20'
            onChange={handleNameChange}
            style={{ marginLeft: '20px', textAlign: 'center' }}
           /></label>
            </div>
            <div>
        <label>Size: 
            <select id="size-dropdown" name="size" value={size} onChange={handleSizeChange} style={{ marginLeft: '20px' }}>
                <option value=''>--Select a Size--</option>
                <option value='personal'>personal</option>
                <option value='small'>small</option>
                <option value='medium'>medium</option>
                <option value='large'>large</option>
            </select>
        </label></div>
       <div className="checkbox-group"><h2>Toppings:</h2>
        <div className="checkbox-label">
            <input type="checkbox" id="topping1" name="topping1" checked={topping1} onChange={handleTopping1Change} className="checkbox-input"/>
            <label htmlFor="topping1">Cheese</label>
        </div>
        <div className="checkbox-label">
        <input type="checkbox" id="topping2" name="topping2" checked={topping2} onChange={handleTopping2Change} className="checkbox-input"/>
            <label htmlFor="topping2">Pepperoni</label>
        </div>
        <div className="checkbox-label">
        <input type="checkbox" id="topping3" name="topping3" checked={topping3} onChange={handleTopping3Change} className="checkbox-input"/>
            <label htmlFor="topping3">Mushrooms</label>
        </div>
        <div className="checkbox-label">
        <input type="checkbox" id="topping4" name="topping4" checked={topping4} onChange={handleTopping4Change} className="checkbox-input"/>
            <label htmlFor="topping4">Anchovies</label>
        </div>
       </div>
        <div>
            <label>Special instructions:</label>
            <input name="special" type="text" placeholder="type order notes here" id="special-text" value={special} onChange={handleSpecialInstruction} style={{ marginLeft: '20px', textAlign: 'center' }}></input>
        </div>
        <div className="checkbox-label">
            <label htmlFor="glutenFree">Gluten Free Crust</label>
            <input type="checkbox" id="glutenFree" name="glutenFree" checked={glutenFree} onChange={handleGlutenFreeChange} className="checkbox-input"/>
        </div>

        {glutenFree && (
            <div className="gluten-free-message">
                    Gluten-free crust only comes in a medium size.
                </div>
        )} 
        <div>{toppingError && <div className="error">{toppingError}</div>}</div>
        <div>{sizeError && <div className="error">{sizeError}</div>}</div>
        <div>{nameError && <div className="error">{nameError}</div>}</div>
        <div>
            <button id="order-button" type="submit">Add to Order</button><h2 class="price-tag">${price.toFixed(2)}</h2>
        </div></div>
       </form>
       
       </div>
    )
}