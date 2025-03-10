// Import commands.js using ES2015 syntax:
import './commands';

//Global setup for the specs
beforeEach(() => {
    //cy.wait(4000);
    cy.visit("https://wave-trial.getbynder.com/login/");
    cy.get('.login-btn')
    .should('be.visible');

    cy.acceptCookies();
});
