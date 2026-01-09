/// <reference types="cypress" />
describe("Check Radio and CheckBox", () => {
  it("Check Radio Button", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");

    //check visibility
    cy.get("#male").should("be.visible");
    cy.get("#female").should("be.visible");

    //checked male button and assert female button is not checked
    cy.get("#male").check();
    cy.get("#female").should("not.be.checked");

    //checked female button and assert male button is not checked
    cy.get("#female").check();
    cy.get("#male").should("not.be.checked");
  });

  it("Check Boxes", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");

    //check visibility
    cy.get("#sunday").should("be.visible");
    cy.get("#monday").should("be.visible");

    //checked sunday checkbox and assert Sunday check box is checked
    cy.get("#sunday").check();
    cy.get("#sunday").should("be.checked");

    //checked monday checkbox and assert monday check box is checked
    cy.get("#monday").check();
    cy.get("#monday").should("be.checked");

    //Checked all check boxes and verify is selected
    cy.xpath("(//div[@class='form-group'])[4]/div/input").check();
    cy.xpath("(//div[@class='form-group'])[4]/div/input").should("be.checked");

    //Checked all check boxes and verify is not selected
    cy.xpath("(//div[@class='form-group'])[4]/div/input").uncheck();
    cy.xpath("(//div[@class='form-group'])[4]/div/input").should(
      "not.be.checked"
    );
    //Select First Checkbox
    // cy.get("#sunday").first().check();
    cy.xpath("(//div[@class='form-group'])[4]/div/input").first().check();
    //Select Last Checkbox
    cy.xpath("(//div[@class='form-group'])[4]/div/input").last().check();

    //select random check box
    let checkboxs = cy.xpath("(//div[@class='form-group'])[4]/div/input");

    //select random checkboxes
    const days = ["Sunday", "Monday", "Saturday"];

    days.forEach((day) => {
      cy.contains(day).prev("input[type='checkbox']").check();
    });
  });
});
