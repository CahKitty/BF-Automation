describe('template spec', () => {
  it.only('Erro ao Fazer Login', () => {
    cy.visit('/')
    cy.LoginInvalido()
    cy.wait(1500)
    cy.get('#alert-message').should('contain.text', 'E-mail ou senha inválidos')
  })

  it('Sucesso ao Fazer Login', () => {
    cy.visit('/')
    cy.Login()
  })
});