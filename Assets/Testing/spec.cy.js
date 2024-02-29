describe('React App', () => {
    it('renders the correct elements', () => {
        cy.visit('http://localhost:3003')
        cy.get('input').should('#name-input').type('now')
    })
})

// Implement the following tests in Cypress:

// - [ ] test that you can add text to the box
// ====>A name text input field with an id of "name-input"
// - [ ] test that you can select multiple toppings
// - [ ] test that you can submit the form
//======>An Add to Order button that has an id of "order-button" and
// that submits the form and returns a database record of name, size, toppings 
//and special instructions