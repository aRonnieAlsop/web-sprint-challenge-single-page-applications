
export const updateOrder = () => {
    var sizeDropdown = document.getElementById('size-dropdown')
    var selectedSize = sizeDropdown.value 
    var topping1 = document.getElementById('topping1').checked
    var topping2 = document.getElementById('topping2').checked
    var topping3 = document.getElementById('topping3').checked
    var topping4 = document.getElementById('topping4').checked
    var glutenFree = document.getElementById('glutenFree').checked

    var basePrice = 0

    switch (selectedSize) {
        case 'personal':
            basePrice = 10.00;
            break;
        case 'small':
            basePrice = 18.00;
            break;
        case 'medium':
            basePrice = 25.00;
            break;
        case 'large':
            basePrice = 30.00;
            break;
    }

    if (glutenFree) {
        basePrice = 28.00;
    }

    var toppingPrice = 0

    if (topping1) {
        toppingPrice += 1.50
    }
    if (topping2) {
        toppingPrice += 1.50
    }
    if (topping3) {
        toppingPrice += 1.50
    }
    if (topping4) {
        toppingPrice += 1.50
    }

    var totalPrice = basePrice + toppingPrice

    document.getElementById('order-button').innerHTML = "Order Pizza $" + totalPrice.toFixed(2)
}

document.getElementById('order-button').addEventListener('click', updateOrder)

export const validateName = () => {

}

export const resetForm = () => {

}