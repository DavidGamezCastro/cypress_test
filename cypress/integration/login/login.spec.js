/// <reference types="cypress" />

// si le ponemos only solo nos ejecuta ese test
// y si lepionemos skip no lo ejecuta

// ej para jueves en la pagina esa , shiting content, example1, tabla comprobar que tiene 5 cosas



describe('test de login', () => {

    beforeEach(() => {

        cy.visit('https://the-internet.herokuapp.com/login')

    })

    it('valid user can login', () =>{

        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa').click()
        cy.get('#flash').contains("You logged into a secure area!")
    
    })
    
    it.skip('not valid user can not login', () =>{
    
        cy.get('#username').type('javi')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.fa').click()
        cy.get('#flash').contains("Your username is invalid!")
    
    })
    
    it('not valid password can not login', () =>{
    
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('159263487')
        cy.get('.fa').click()
        cy.get('#flash').contains("Your password is invalid!")
    
    })
})

