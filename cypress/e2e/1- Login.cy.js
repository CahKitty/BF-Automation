describe('Login', () => {

  it('Sucesso ao Fazer Login', () => {
    cy.visit('/')
    cy.Login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
  })

  it('Erro ao Fazer Login', () => {
    cy.intercept('POST', 'https://accounts-api.eduzz.com/authenticate').as('authRequest');
    cy.visit('/')
    cy.Login('emailerrado@gmail.com', 'senha1nv4lid4');
    cy.wait('@authRequest').its('response.statusCode').should('eq', 401)
     
    cy.get('.MuiAlert-message')
      .should('contain.text', 'Não encontramos um cadastro com este endereço de e-mail')
});

});