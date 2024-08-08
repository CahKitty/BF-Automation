describe('template spec', () => {

  it.only('Sucesso ao Fazer Login', () => {
    cy.visit('/')
    cy.Login('qa-next@eduzz.com','QANext123456!')
  })

  it('Erro ao Fazer Login', () => {
    cy.visit('/')
    cy.LoginInvalido()
    cy.wait(1500)
    
    cy.get('#alert-message')
      .should('contain.text', 'E-mail ou senha inválidos')
  })

});