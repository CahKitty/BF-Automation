describe('template spec', () => {
  it('Erro ao Fazer Login', () => {
    cy.visit('/')
    cy.Login()
    cy.contains('Não encontramos um cadastro com este endereço de e-mail').should('be.visible')
  })
  it('Sucesso ao Fazer Login', () => {
    cy.visit('/')
    cy.Login()
  })
});