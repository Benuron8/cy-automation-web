describe("Login Test", () => {
  it("Logs in securely using environment variables", () => {
    cy.visit("https://wave-trial.getbynder.com/login/");
    cy.get('#inputEmail').type(Cypress.env("email"));
    cy.get("#inputPassword").type(Cypress.env("password"), { log: false });
    cy.get(".login-btn").click();
    cy.url().should("include", "/account/dashboard/");

    cy.get('.touch-block')
      .trigger('mouseover');

    cy.screenshot('hover');

    cy.contains('button', 'Logout').click();
  });
});
