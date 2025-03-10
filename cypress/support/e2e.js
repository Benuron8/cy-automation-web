// Import commands.js using ES2015 syntax:
import './commands';

//Global setup for the specs
beforeEach(() => {
    //cy.wait(2000);
    cy.visit('/login');
    cy.acceptCookies();
});
