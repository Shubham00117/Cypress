/// <reference types="cypress" />

describe("Drop Down with Select", () => {
  it.skip("drop down with select", () => {
    cy.visit("https://www.zoho.com/commerce/free-demo.html");

    cy.get("[name='CASECF13']").select("Yes, I currently sell online");
  });

  it.skip("drop down without select", () => {
    cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

    cy.get("#select2-reasondummy-container").click();
    cy.get(".select2-search__field")
      .type("Expedite passport renewal")
      .type("{enter}");

    cy.get("#select2-reasondummy-container").should(
      "contain",
      "Expedite passport renewal"
    );
  });

  it.skip("auto suggest drop down", () => {
    cy.visit("https://www.wikipedia.org/");

    cy.get("#searchInput").type("Delhi");
    cy.xpath("//div[@id='typeahead-suggestions']//a")
      .contains("Delhi University")
      .click();
  });

  it("Dynamic drop down - Optimized", () => {
    // 1. Visit and handle potential cookie popups if necessary
    cy.visit("https://www.google.com/");

    // 2. Type the search term
    // No need for cy.wait(); cy.get() has built-in retry logic
    cy.get("[name='q']").type("Cypress Automation testing");

    // 3. Wait for the dropdown container to be visible
    cy.get("ul[role='listbox']").should("be.visible");

    // 4. Iterate and click
    cy.get("div.wM6W7d > span").each(($el) => {
      const text = $el.text().trim(); // Trim to avoid whitespace issues

      if (text === "cypress automation testing tutorial") {
        // Use cy.wrap to perform Cypress commands on the yielded element
        cy.wrap($el).click();
        return false; // Break the loop early once found
      }
    });

    cy.get("[name='q']").should(
      "have.value",
      "cypress automation testing tutorial"
    );
  });
});
