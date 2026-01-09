describe("Css Locators", () => {
  it("csslocators", () => {
    cy.visit("http://www.automationpractice.pl/index.php");

    // cy.get("#search_query_top").type("T-Shirt"); //id
    cy.get("input#search_query_top").type("T-Shirt"); //tag(optional) with id
    // cy.get(".search_query");class
    // cy.get("[name='search_query']"); //attribute

    cy.get("[name='submit_search']").click(); //attribute

    cy.get(".lighter").contains("T-Shirt"); //class
  });
});
