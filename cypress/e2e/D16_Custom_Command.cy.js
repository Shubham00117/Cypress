describe("Custom Command", () => {
  it.skip("Handling Link", () => {
    cy.visit("https://the-internet.herokuapp.com/");

    cy.clickLink("Form Authentication");
  });

  it.skip("Handling Link", () => {
    cy.visit("https://the-internet.herokuapp.com/");
    cy.containsClick("FORM AUTHENTICATION");
  });

  //Login using Custom Command
  it("Login", () => {
    cy.visit("https://practicetestautomation.com/practice/");

    cy.clickLink("Test Login Page");
    cy.LoginApp("student", "Password123");
    cy.get(".post-title").containsClick("Logged In SUCCESSFULLY");
  });
});
