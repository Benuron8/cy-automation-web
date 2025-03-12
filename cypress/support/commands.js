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

  cy.contains('.login-container .cbox_messagebox_error', 'You have entered an incorrect username or password.', { timeout: 30000 })
  .should('be.visible');

cy.contains('.update.error h1', 'You have entered an incorrect username or password.', { timeout: 30000 })
  .should('be.visible');

  //cy.get('body').then(($body) => {
//if ($body.find('.login-container .cbox_messagebox_error').length > 0) {
     // cy.get('.login-container .cbox_messagebox_error', { timeout: 50000 })
     //   .should('be.visible')
      //  .should('contain.text', 'You have entered an incorrect username or password.');
   // } else {
     // cy.log('Error message not found in .cbox_messagebox_error');
   // }
  //});

  //cy.get('body').then(($body) => {
    //if ($body.find('.update.error').length > 0) {
      //cy.get('.update.error', { timeout: 50000 })
       // .should('exist')
       // .and('be.visible')
       // .within(() => {
//cy.get('h1').should('contain.text', 'You have entered an incorrect username or password.');
       // });
   // } else {
      cy.log('Error message not found in .update.error');
    //}
  //});

});

Cypress.on('uncaught:exception', (err, runnable) => {
  console.error('Uncaught exception:', err);
  return false;
});

