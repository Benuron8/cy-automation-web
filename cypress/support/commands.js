Cypress.Commands.add("acceptCookies", () => {
    cy.contains('button', /Save|Accept/i).should(be.visible).click();
});

Cypress.Commands.add("login", (email, password) => {
    cy.get('#inputEmail').type(email);
    cy.get('#inputPassword').type(password, { log: false });
    cy.get('.login-btn').click();
});

Cypress.Commands.add("loginConfirmation", () => {
    //confirm login successful
    cy.url().should("include", "/account/dashboard/");
});

Cypress.Commands.add("logoutConfirmation", () => {
    //confirm login successful
    cy.url().should('include', '/login/')
    cy.get('.cbox_messagebox')
      .should('contain.text', 'You have successfully logged out.');
});

Cypress.Commands.add("confirmErrorNotification", (message) => {
    cy.get('.update.error')
      .should('be.visible')
      .within(() => {
        cy.get('h1').should('contain.text', message);
      });
});

Cypress.on('uncaught:exception', (err, runnable) => {
  console.error('Uncaught exception:', err);
  return false;
});

