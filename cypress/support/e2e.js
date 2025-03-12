// Import commands.js using ES2015 syntax:
import './commands';

//Global setup for the specs
beforeEach(() => {
    cy.visit('/login');
});
