// Import commands.js using ES2015 syntax:
import './commands';

//Global setup for the specs
beforeEach(() => {
    console.log('Before Each Hook is running');
    cy.visit("https://wave-trial.getbynder.com/login/");
    //cy.acceptCookies();
});
