describe("Assertions in Cpress", () => {
  it("Implict Assertions", () => {
    cy.visit("https://demowebshop.tricentis.com/");

    cy.url("https://demowebshop.tricentis.com/").should(
      "eq",
      "https://demowebshop.tricentis.com/"
    );

    cy.url("https://demowebshop.tricentis.com/").should(
      "include",
      "tricentis.com/"
    );
    cy.url("https://demowebshop.tricentis.com/").should(
      "contain",
      "demowebshop"
    );

    cy.url("https://demowebshop.tricentis.com/")
      .should("eq", "https://demowebshop.tricentis.com/")
      .should("include", "tricentis.com/")
      .should("contain", "demowebshop");

    cy.url("https://demowebshop.tricentis.com/")
      .should("eq", "https://demowebshop.tricentis.com/")
      .and("include", "tricentis.com/")
      .and("contain", "demowebshop")
      .and("not.contain", "demowebshopppp");

    cy.title()
      .should("eq", "Demo Web Shop")
      .and("eq", "Demo Web Shop")
      .and("contain", "Shop");

    cy.get("[alt='Tricentis Demo Web Shop']").should("be.visible").and("exist");

    cy.xpath("//a").should("have.length", "95");
    cy.xpath("//input[@id='small-searchterms']").type("T-Shirt");
    cy.xpath("//input[@id='small-searchterms']").should(
      "have.value",
      "T-Shirt"
    );
  });

  it("Explicit Assertions", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.get("[name='username']").type("student");
    cy.get("#password").type("Password123");
    cy.get("#submit").click();

    let ExpectedInput = "Congratulations student. You successfully logged in!";

    cy.xpath(
      "//strong[contains(text(),'Congratulations student. You successfully logged')]"
    ).then((x) => {
      let ActualInput = x.text(); // FIX: remove extra spaces

      // BDD Approach
      expect(ExpectedInput).to.equal(ActualInput); // Positive Case
      // expect(ExpectedInput).to.not.equal(ActualInput); //Negetive Case

      //TDD Approach
      assert.equal(ExpectedInput, ActualInput); //Positive Case
      // assert.not.equal(ExpectedInput, ActualInput); //Negetive Case
    });
  });
});
