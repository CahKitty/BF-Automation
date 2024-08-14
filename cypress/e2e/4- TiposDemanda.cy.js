import{data} from '../support/index'

describe('Tipos de Demandas', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.Login(Cypress.env('USER_EMAIL'), Cypress.env('USER_PASSWORD'))
   })

  it('Cadastrar Tipo de Demanda', () => {
    cy.contains('Tipos de Demanda').click()
    cy.contains('.btn', 'CADASTRAR TIPOS DE DEMANDA').click()
    cy.get('input[name="tdm_name"]').type('Teste 4')
    cy.get('[role="combobox"]').click()
    cy.contains('li', 'Ernie.Paucek3').click()
    cy.get('[data-cy="typedemandform-submit-button"]').click()

    cy.contains('Operação realizada com sucesso!')
      .should('be.visible')
  })

  it('Editar Tipo de Demanda', () => {
    cy.contains('Tipos de Demanda').click()
    cy.get(':nth-child(1) > .sc-bmzXxz > a > .btn').click()
    cy.get('input[name="tdm_name"]').clear().type('Teste')
    cy.contains('.btn', 'Salvar').click()
  });
  
})