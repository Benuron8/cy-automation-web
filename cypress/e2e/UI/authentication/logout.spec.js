describe('Logout Tests', () => {
    it("Successful logout", () => {
        cy.login(Cypress.env("email"), Cypress.env("password"));
        cy.loginConfirmation();

        //to be reviewed: hidden element interaction
        cy.get('.profile',{ timeout: 10000 }).should('be.visible').trigger('mouseover');
        cy.contains('button', 'Logout').click({ force: true });

        //confirm logout successful
        cy.logoutConfirmation();
    })
});