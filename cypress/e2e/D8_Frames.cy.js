/// <reference types="cypress" />
import "cypress-iframe";

describe("IFrame", () => {
  it("Approach 1", () => {
    // FIX: This prevents Cypress from failing when the website throws an external script error
    cy.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    cy.visit("https://www.tiny.cloud/docs/tinymce/latest/");

    cy.get("#default-editor_ifr")
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .then(cy.wrap)
      .clear()
      .type("Welcome {cmd+a}"); // use {ctr+a} if on Windows

    cy.get("button[aria-label='Bold']").click();
  });

  it("Approach 2 - Using Custom Command", () => {
    // Ignore website script errors
    cy.on("uncaught:exception", () => false);

    cy.visit("https://www.tiny.cloud/docs/tinymce/latest/");

    // Use the custom command
    cy.getIframe("#default-editor_ifr").as("editor");

    // Interact with the editor
    cy.get("@editor").clear().type("Welcome {cmd+a}");

    // Click the bold button
    cy.get("button[aria-label='Bold']").click();
  });

  it("Approach using cypress-iframe package", () => {
    // Ignore the website script errors
    cy.on("uncaught:exception", () => false);

    cy.visit("https://www.tiny.cloud/docs/tinymce/latest/");

    // 1. Ensure the iframe is loaded properly
    cy.frameLoaded("#default-editor_ifr");

    // 2. Use cy.iframe() to find and interact with the body
    cy.iframe("#default-editor_ifr").clear().type("Welcome {cmd+a}");

    // 3. Perform the click (this is outside the iframe)
    cy.get("button[aria-label='Bold']").click();
  });
});
