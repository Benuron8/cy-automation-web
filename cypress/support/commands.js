Cypress.Commands.add("login", (email, password) => {
  cy.url().should('include', '/login/', { timeout: 30000 })
  cy.get('#inputEmail').should('be.visible').click()
  cy.get('#inputEmail').type(email);
  cy.get('#inputPassword').should('be.visible').click()
  cy.get('#inputPassword').type(password, { log: false });
  cy.get('.login-btn').click();
});

Cypress.Commands.add("loginConfirmation", () => {
  //confirm login successful
  cy.log(cy.url())
  cy.get('.account-logo').should('be.visible');
  cy.get('#rootHeaderNavigation').should('be.visible');
});

Cypress.Commands.add("logoutConfirmation", () => {
  //confirm logout successful
  cy.url().should('include', '/login/')
  cy.get('.cbox_messagebox')
    .should('contain.text', 'You have successfully logged out.');
});

Cypress.Commands.add("confirmError", (message) => {
  cy.contains('.login-container .cbox_messagebox_error', 'You have entered an incorrect username or password.', { timeout: 30000 })
    .should('be.visible');
  cy.contains('.update.error h1', 'You have entered an incorrect username or password.', { timeout: 30000 })
    .should('be.visible');
});

Cypress.on('uncaught:exception', (err, runnable) => {
  console.error('Uncaught exception:', err);
  return false;
});

