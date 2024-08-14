describe('Times', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.Login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
   })

  it('Cadastrar Times', () => {
    cy.contains('Times').click()
    cy.contains('.btn', 'CADASTRAR TIMES').click()
    cy.get('input[name="tea_name"]').type('Teste')
    cy.get('[data-cy="data-selector"]').click()
    cy.contains('Coy37').click()
    cy.get('[data-cy="teamform-register-submit-button"]').click()
    
  })

})