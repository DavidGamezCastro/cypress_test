/// <reference types = "cypress" />


describe('test de shiftin content', () => {

    beforeEach(() => {

        cy.visit('https://the-internet.herokuapp.com/')

    })

    it('comprobar que hay 5 cosas', () => {

        cy.get(':nth-child(39) > a').click()
        cy.get('[href="/shifting_content/menu"]').click()
        cy.get('ul li').should('have.length', 5)
        


    })
})
