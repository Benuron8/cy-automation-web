// Import commands.js using ES2015 syntax:
import './commands';

//Global setup for the specs
beforeEach(() => {
    cy.visit("https://wave-trial.getbynder.com/login/");
    cy.acceptCookies();
});
