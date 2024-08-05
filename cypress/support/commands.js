Cypress.Commands.add ('Login' , () => {
    cy.origin('https://accounts.testzz.ninja', () => {
        cy.get('#email-login').type('qa-next@eduzz.com')
        cy.get('#password-login').type('QANext123456!')
        cy.get('.MuiGrid-spacing-xs-3 > .MuiGrid-container > .MuiGrid-root').click()
});
})
Cypress.Commands.add ('LoginInvalido' , () => {
    cy.visit('https://accounts.eduzz.com/ba814230-c2bb-4250-adac-7ae384729f4a/login?btnColor=%230509EE&redirectTo=https%3A%2F%2Fbfree.eduzz.com%2F')
      cy.get('#email-login').type('qa-next@eduzz.com')
      cy.get('#password-login').type('1234!')
      cy.get('.MuiGrid-spacing-xs-3 > .MuiGrid-container > .MuiGrid-root').click()
})
