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
  //confirm logout successful
  cy.url().should('include', '/login/')
  cy.get('.cbox_messagebox')
    .should('contain.text', 'You have successfully logged out.');
});

Cypress.Commands.add("confirmError", (message) => {
  cy.get('.login-container .cbox_messagebox_error', { timeout: 20000 }) // Increase timeout to ensure it appears
  .should('be.visible')
  .should('contain.text', 'You have entered an incorrect username or password.');
});

Cypress.on('uncaught:exception', (err, runnable) => {
  console.error('Uncaught exception:', err);
  return false;
});

