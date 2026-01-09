describe("template spec", () => {
  it("Test 1", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.title().should("eq", "OrangeHRM");
  });
  it("Test 2", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.title().should("eq", "OrangeHRM123");
  });
});
