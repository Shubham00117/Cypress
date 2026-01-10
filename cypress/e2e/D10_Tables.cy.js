/// <reference types="cypress" />

describe("Handles Tables", () => {
  beforeEach("Login", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");
  });

  it.skip("Check Number of rows and coloumns", () => {
    cy.get("[name='BookTable']>tbody>tr").should("have.length", "7"); //rows 7
    cy.get("tbody>tr>th").should("have.length", "4"); //columns 4
  });
  it.skip("Check Cells Data from specific row and column", () => {
    cy.get("[name='BookTable']>tbody>tr:nth-child(4)>td:nth-child(2)").contains(
      "Animesh"
    );
  });
  it.skip("Print complete table using within()", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");

    cy.get("[name='BookTable'] > tbody > tr")
      .not(":first") // ✅ skip header row
      .each(($row) => {
        cy.wrap($row).within(() => {
          cy.get("td").each(($col) => {
            cy.log($col.text().trim());
          });
        });
      });
  });

  it("Print complete table data from all pages", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");

    // total pages = 4
    for (let page = 1; page <= 4; page++) {
      // click pagination button
      cy.get('[class="pagination"] > li:nth-child(' + page + ")").click();

      cy.log("Page " + page);

      // read table data
      cy.get("#productTable > tbody > tr").each(($row) => {
        cy.wrap($row)
          .find("td")
          .each(($cell) => {
            cy.log($cell.text().trim());
          });
      });
    }
  });
});
