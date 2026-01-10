/// <reference types="cypress" />

describe("Alerts", () => {
  //Javascript Window Alert
  it.skip("window alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.get("button[onclick='jsAlert()']").click();
    //capture text inside alert
    cy.on("window:alert", (t) => {
      expect(t).to.contain("I am a JS Alert");
    });
    //alert window automatically closed by cypress
    cy.get("#result").should("have.text", "You successfully clicked an alert");
  });

  it.skip("Prompt alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.get("button[onclick='jsConfirm()']").click();

    //capture text inside alert
    cy.on("window:confirm", (t) => {
      expect(t).to.contain("I am a JS Confirm");
    });

    cy.on("window:confirm", (t) => false); //click cancel button on alert and cancel the prompt

    //alert window automatically closed by cypress
    // cy.get("#result").should("have.text", "You clicked: Ok");
    cy.get("#result").should("have.text", "You clicked: Cancel"); //after cancel the prompt alert message
  });

  it(" JS Prompt alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("Welcome");
    });

    //close alert window
    cy.get("button[onclick='jsPrompt()']").click();

    //alert window automatically closed by cypress
    cy.get("#result").should("have.text", "You entered: Welcome");
  });

  //Authenticated Alert
  it(" Authenticated alert", () => {
    //Appraoch 1
    // cy.visit("https://the-internet.herokuapp.com/basic_auth", {
    //   auth: { username: "admin", password: "admin" },
    // });

    //Approach 2 fill the username and password via url
    // cy.visit("https://username:password@the-internet.herokuapp.com/basic_auth");
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");

    cy.get("p").should(
      "have.contain",
      "Congratulations! You must have the proper credentials."
    );
  });
});
