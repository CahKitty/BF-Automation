import { faker } from "@faker-js/faker";
const empresas = {
  id_name: faker.internet.userName(),
  id_number: faker.number.int({ max: 10000 }),
  enterprise_name: faker.internet.userName()
}
describe('Jornadas', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.Login()
   })
  it('Sucesso ao Cadastrar Jornadas', () => {
    cy.contains('Jornadas').click()
    cy.contains('.btn', 'CADASTRAR JORNADAS').click()
    cy.get('input[name="jny_name"]').type(empresas.id_name)
    cy.get('[role="combobox"]').click()
    cy.contains('li', 'Ernie.Paucek3').click()
    cy.get('[data-cy="journeyform-submit-button"]').click()
    cy.contains('Operação realizada com sucesso!').should('be.visible')
    


 
   
    
  })
})