describe("My Test Suite", () => {
  //Approach 1
  it.skip("Fixture Demo Test", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );

    cy.fixture("Fixture_Data.json").then((data) => {
      cy.get("input[placeholder='Username']").type(data.username);
      cy.get("input[placeholder='Password']").type(data.password);
      cy.get("button[type='submit']").click();

      cy.get(".oxd-userdropdown-name").should("contain", data.expected);
    });
  });

  //Appraoch 2
  let username = "";
  let password = "";
  let expected = "";

  before("Load fixture data", () => {
    cy.fixture("fixture_Data.json").then((data) => {
      username = data.username;
      password = data.password;
      expected = data.expected;
    });
  });
  it("Access Through Hooks Multiple set of data", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get("input[placeholder='Username']").type(username);
    cy.get("input[placeholder='Password']").type(password);
    cy.get("button[type='submit']").click();

    cy.get(".oxd-userdropdown-name").should("contain", expected);
  });
});
