

export const Pizza = (props) => {

const {
       values, 
       update,
       submit,
       
} = props

const onChange = evt => {
    const name = evt.target.name
    const { value } = evt.target
    update(name, value)
}

const onSubmit = evt => {
    evt.preventDefault()
    submit()
}
 
 return (
       <form id="pizza-form" onSubmit={onSubmit}>
        <div>
            <h2>Order Online</h2>
            <label>Name:
        <input 
            id="name-input"
            name='name'
            type='text'
            placeholder='type a name for the order'
            maxLength='20'
            onChange={onChange}
            // value={values.name}
            
            /></label>
            </div>
            <div>
        <label>Size: 
            <select id="size-dropdown" name="size" onChange={onChange}>
                <option value=''>--Select a Size--</option>
                <option value='personal'>Personal</option>
                <option value='small'>Small</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
            </select>
        </label></div>
        <div>
           <label>Pepperoni<input type="checkbox" name="pepperoni" onChange={onChange} /></label>
           <label>Cheese<input type="checkbox" name="cheese" onChange={onChange}/></label>
           <label>Anchovies<input type="checkbox" name="anchovies" onChange={onChange}/></label>
           <label>Mushrooms<input type="checkbox" name="mushrooms" onChange={onChange}></input></label>
        </div>
        <div>
            <label>Special instructions:</label>
            <input type="text" placeholder="type order notes here" onChange={onChange} id="special-text"></input>
        </div>
        <div>
            <button id="order-button">Add to Order</button>
        </div>
       
       </form>
    )
}