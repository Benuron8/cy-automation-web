Cypress.Commands.add("login", (email, password) => {
  cy.url().should('include', '/login/', { timeout: 30000 })
  cy.get('#inputEmail').should('be.visible').and('be.enabled').type(email);
  cy.get('#inputPassword').should('be.visible').and('be.enabled').type(password, { log: false });
  cy.get('.login-btn').click();
});

Cypress.Commands.add("loginConfirmation", () => {
  //confirm login successful
  cy.log(cy.url())
  cy.get('#rootHeaderNavigation').should('be.visible', { timeout: 30000 });
});

Cypress.Commands.add("logoutConfirmation", () => {
  //confirm logout successful
  cy.url().should('include', '/login/')
  cy.get('.cbox_messagebox')
    .should('contain.text', 'You have successfully logged out.');
});

Cypress.Commands.add("confirmError", (message) => {
  cy.url().should('include', '/login/', { timeout: 30000 })
  cy.contains('.login-container .cbox_messagebox_error', 'You have entered an incorrect username or password.', { timeout: 30000 })
    .should('be.visible');

  cy.contains('.update.error h1', 'You have entered an incorrect username or password.', { timeout: 30000 })
    .should('be.visible');
});

Cypress.on('uncaught:exception', (err, runnable) => {
  console.error('Uncaught exception:', err);
  return false;
});

