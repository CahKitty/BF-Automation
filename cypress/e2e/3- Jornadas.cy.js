import{data} from '../support/index'

describe('Jornadas', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.Login()
   })
  it('Sucesso ao Cadastrar Jornadas', () => {
    cy.contains('Jornadas').click()
    cy.contains('.btn', 'CADASTRAR JORNADAS').click()
    cy.get('input[name="jny_name"]').type(data.id_name)
    cy.get('[role="combobox"]').click()
    cy.contains('li', 'Ernie.Paucek3').click()
    cy.get('[data-cy="journeyform-submit-button"]').click()

    cy.contains('Operação realizada com sucesso!')
      .should('be.visible')
  })

  it('Editar Jornada', () => {
    cy.contains('Jornadas').click()
    cy.get(':nth-child(1) > .sc-bmzXxz > a > .btn').click()
    cy.get('input[name="jny_name"]').clear().type('teste')
  });
  
})