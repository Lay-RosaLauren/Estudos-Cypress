describe('DuckDuckGo', () => {
    beforeEach(() => {
      cy.visit('http://duckduckgo.com')
    })
  
    it('searches by typing and pressing ENTER', () => {
      cy.get('#search_form_input_homepage')
        .should('be.visible')
        .type('Cypress.io{enter}')
  
      cy.get('.results--main')
        .should('be.visible')
    })
  
    it('searches by typing and clicking the magnifying glass button', () => {
      cy.get('#search_form_input_homepage')
        .should('be.visible')
        .type('Cypress.io')
      cy.get('#search_button_homepage')
        .should('be.visible')
        .click()
  
      cy.get('.results--main').should('be.visible')
      cy.get('[data-testid="result"]').should('have.length', 10)    
    })
  })
