describe("Login Tests", () => {
    it("Successful login using valid credentials", () => {
        cy.login(Cypress.env("email"), Cypress.env("password"));
        cy.loginConfirmation();
    });

    it("Unsuccessful login using invalid email and password", () => {
        cy.login('wrongemail@gmail.com', 'wrongpassword');
        cy.confirmErrorNotification('You have entered an incorrect username or password.');
    });

    it("Unsuccessful login using valid email and invalid password", () => {
        cy.login(Cypress.env("email"), 'wrongpassword');
        cy.confirmErrorNotification('You have entered an incorrect username or password.');
    });

    it("Logging in with an empty username and password", () => {
        cy.login('', '');

        cy.get('#inputEmail').should('have.value', '');
        cy.get('#inputPassword').should('have.value', '');
    });
});