describe('Password Reset Tests', () => {
    it("Resetting password with wrong captcha", () => {
            cy.get('.lost-password').should('be.visible').click();

            cy.get('#frmForgotLoginBox').should('be.visible');
            cy.get('#forgotPassword').type(Cypress.env("email"));

            //fill a wrong captcha value
            cy.get('.captcha').should('be.visible');
            cy.get('input[name="captcha"]').type('abc123');

            cy.get('#sendPassword').click();

            //cy.get('.generate-new-captcha').should('be.visible');
            cy.confirmErrorNotification("The text you\'ve entered is incorrect");
    });
});
