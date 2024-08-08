import{data} from '../support/index'

describe('Empresas', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.Login()
  })
    it('Cadastro de Empresas', () => {  
      cy.contains('Empresas').click()
        cy.contains('.btn', 'CADASTRAR EMPRESAS').click()
        cy.get('input[name="cpn_cli_cod"]').type(data.id_number)
        cy.get('input[name="cpn_name"]').type(data.enterprise_name)
        cy.get('[data-cy="companyform-submit-button"]').click()

        cy.contains('Operação realizada com sucesso!')
          .should('be.visible')
    });

    it('Editar Empresa', () => {
      cy.intercept('GET', '/api-stage/companies/procurar/**').as('getCompanies')
      cy.contains('Empresas').click()
      cy.get(':nth-child(1) > .sc-bmzXxz > a > .btn').click()
      cy.wait('@getCompanies')
      cy.get('input[name="cpn_cli_cod"]').clear().type(data.id_number)
      cy.get('input[name="cpn_name"]').clear().type(data.enterprise_name)
      cy.get('[data-cy="companyform-submit-button"]').click()

      cy.contains('Operação realizada com sucesso!')
        .should('be.visible')
    });
    
});