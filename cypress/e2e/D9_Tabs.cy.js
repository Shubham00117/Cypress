/// <reference types="cypress" />

describe("Handle Tabs", () => {
  it("Handle New Tab on a working website", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");

    cy.contains("Click Here").invoke("removeAttr", "target").click();

    cy.url().should("include", "/windows/new");

    cy.contains("New Window").should("be.visible");
  });

  it("Approach2", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");

    // Get the link and extract href jquery
    cy.get(".example > a").then((e) => {
      const url = e.prop("href");

      // Visit the new page in the same tab
      cy.visit(url);
    });

    // Validate new page URL
    cy.url().should(
      "include",
      "https://the-internet.herokuapp.com/windows/new"
    );

    // Optional wait (not recommended in real projects)
    cy.wait(2000);

    // Go back to parent page
    cy.go("back");
  });
});
