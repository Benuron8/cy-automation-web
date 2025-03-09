
describe("Login Tests", () => {
  it("Successful login using valid credentials", () => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.loginConfirmation();
  });

  it("Unsuccessful login using invalid email and password", () => {
    cy.login('wrongemail@gmail.com', 'wrongpassword');
    cy.confirmErrorNotification('You have entered an incorrect username or password.');
  });

  it("Unsuccessful login using valid email and invalid password", () => {
    cy.login(Cypress.env("email"), 'wrongpassword');
    cy.confirmErrorNotification('You have entered an incorrect username or password.');
  });

  it("Logging in with an empty username and password", () => {
    cy.login('', '');

    cy.get('#inputEmail').should('have.value', '');
    cy.get('#inputPassword').should('have.value', '');
  });
});

describe('Logout Tests', () => {
  it("Successful logout", () => {
    cy.login(Cypress.env("email"), Cypress.env("password"));
    cy.loginConfirmation();

    //to be reviewed: hidden element interaction
    cy.get('.profile').should('be.visible').trigger('mouseover');
    cy.contains('button', 'Logout').click({ force: true });

    //confirm logout successful
    cy.logoutConfirmation();
  })
});

describe('Password Reset Tests', () => {
  it("Resetting password with wrong captcha", () => {
    cy.get('.lost-password').should('be.visible').click();

    cy.get('#frmForgotLoginBox').should('be.visible');
    cy.get('#forgotPassword').type(Cypress.env("email"));

    //fill a wrong captcha value
    cy.get('.captcha').should('be.visible');
    cy.get('input[name="captcha"]').type('abc123');

    cy.get('#sendPassword').click();

    //cy.get('.generate-new-captcha').should('be.visible');
    cy.confirmErrorNotification('The text you\'ve entered is incorrect');
  });
});
