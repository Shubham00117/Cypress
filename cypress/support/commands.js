// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />
import "cypress-xpath";

Cypress.Commands.add("getIframe", (iframeSelector) => {
  return cy
    .get(iframeSelector)
    .its("0.contentDocument.body")
    .should("not.be.empty")
    .then(cy.wrap);
});

//custom command for clicking on link using lable

Cypress.Commands.add("clickLink", (label) => {
  cy.get("a").contains(label).click();
});

// Override contains to be case-insensitive (SAFE & WORKING)
// Case-insensitive contains + click
Cypress.Commands.add("containsClick", (label) => {
  cy.contains(new RegExp(label, "i")).should("be.visible").click();
});

//custom command for login

Cypress.Commands.add("LoginApp", (username, password) => {
  cy.get("#username").type(username);
  cy.get("#password").type(password);
  cy.get("#submit").click();
});
