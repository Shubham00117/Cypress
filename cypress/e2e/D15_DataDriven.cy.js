// 1. Fix the "app.js" error by ignoring uncaught exceptions
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

describe("Data Driven Suite", () => {
  let userData;

  before(() => {
    // 2. Ensure the file name matches exactly: fixture_Multiple_Data.json
    cy.fixture("fixture_Multiple_Data.json").then((data) => {
      userData = data;
    });
  });

  it("Should perform login for all users in the fixture", function () {
    // We use the loaded data here
    userData.forEach((user) => {
      cy.visit(
        "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
      );

      // Log which user we are testing
      cy.log(`Testing with user: ${user.username}`);

      cy.get("input[placeholder='Username']").type(user.username);
      cy.get("input[placeholder='Password']").type(user.password);
      cy.get("button[type='submit']").click();

      // 3. Validation logic based on your JSON 'expected' field
      if (user.expected === "Success") {
        cy.get(".oxd-userdropdown-name", { timeout: 10000 }).should(
          "be.visible"
        );

        // Logout to clear session for the next user in the loop
        cy.get(".oxd-userdropdown-name").click();
        cy.contains("Logout").click();
      } else {
        // Validation for invalid credentials
        cy.get(".oxd-alert-content-text")
          .should("be.visible")
          .and("have.text", "Invalid credentials");
      }
    });
  });
});
