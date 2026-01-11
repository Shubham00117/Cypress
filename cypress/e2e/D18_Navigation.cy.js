describe("Navigation", () => {
  it("backword click", () => {
    cy.visit("https://practicetestautomation.com/practice/");

    cy.get(
      "a[href='https://practicetestautomation.com/practice-test-login/']"
    ).click();
    cy.get("section[id='login'] h2").contains("Test login");

    cy.go("back");

    cy.get(':nth-child(2) > [style="flex-basis:33.33%"] > p > a').contains(
      "Test Login Page"
    );

    cy.go("forward");
    cy.get("section[id='login'] h2").contains("Test login");

    cy.reload();
  });
});
