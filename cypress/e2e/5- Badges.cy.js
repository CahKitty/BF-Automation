import{data} from '../support/index'

describe('Badges', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.Login()
   })

  it('Cadastrar um Badge', () => {
    cy.contains('Badges').click()
    cy.contains('.btn', 'CADASTRAR BADGES').click()
    cy.get('input[name="bdg_name"]').type(data.id_number)
    cy.get('#customControlInline').check()
    cy.get('[data-cy="data-selector"]').click()
    cy.contains('Coy37').click()
    cy.get(':nth-child(3) > .mt-4 > [data-cy="default-validation-text-field"] > .MuiInputBase-root').type('Test')
    cy.get(':nth-child(4) > .mt-4 > [data-cy="default-validation-text-field"] > .MuiInputBase-root').type('Test')
    cy.contains('.btn','Salvar').click()

    cy.contains('Operação realizada com sucesso!')
      .should('be.visible')
  })
  
})