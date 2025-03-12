describe("Login Tests", () => {
    it("Successful login using valid credentials", () => {
        cy.login(Cypress.env("email"), Cypress.env("password"));
        cy.loginConfirmation();
    });

    it("Unsuccessful login using invalid email and password", () => {
        const randomEmail = 'user' + Math.floor(Math.random() * 10000) + '@example.com';
        cy.login(randomEmail, 'wrongpassword');
        cy.confirmError("You have entered an incorrect username or password.");
    });

    it("Unsuccessful login using valid email and invalid password", () => {
        cy.login(Cypress.env("email"), 'wrongpassword');
        cy.confirmError("You have entered an incorrect username or password.");
    });

    it("Unsuccessful login with empty email", () => {
        cy.get('#inputEmail').should('have.value', ''); // Verifies that the field is empty
        cy.get('#inputPassword').type(Cypress.env("password"));
        cy.get('.login-btn').click();

        //verifies that both email and password are cleared (but no error message is returned)
        cy.get('#inputEmail').should('have.value', '');
        cy.get('#inputPassword').should('have.value', '');
    });

    it("Unsuccessful login with empty password", () => {
        cy.get('#inputEmail').type(Cypress.env("email"));
        cy.get('#inputPassword').should('have.value', '');
        cy.get('.login-btn').click();

        //verifies that both email and password are cleared (but no error message is returned)
        cy.get('#inputEmail').should('have.value', '');
        cy.get('#inputPassword').should('have.value', '');
    });
});