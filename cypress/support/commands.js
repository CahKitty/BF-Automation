Cypress.Commands.add('Login', (login, senha) => {
    cy.origin('https://accounts.testzz.ninja', { args: { login, senha } }, ({ login, senha }) => {
        cy.get('#email-login').type(login)
        cy.get('#password-login').type(senha)
        cy.get('.MuiGrid-spacing-xs-3 > .MuiGrid-container > .MuiGrid-root').click();
    });
});

