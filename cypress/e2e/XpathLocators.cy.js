describe("XPath Locators", () => {
  it.only("xpath Locators 1", () => {
    cy.visit(
      "http://www.automationpractice.pl/index.php?id_category=8&controller=category"
    );
    cy.xpath("//ul[@class='product_list grid row']/li").should(
      "have.length",
      5
    );
  });

  it("Chained Xpath Locators 2", () => {
    cy.visit(
      "http://www.automationpractice.pl/index.php?id_category=8&controller=category"
    );
    cy.xpath("//ul[@class='product_list grid row']")
      .xpath("/li")
      .should("have.length", 5);
  });
});
