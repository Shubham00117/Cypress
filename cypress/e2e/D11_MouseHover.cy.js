import "@4tw/cypress-drag-drop";
import "cypress-real-events/support";
describe("Important Mouse Actions in Cypress - FINAL WORKING", () => {
  // =========================
  // MOUSE HOVER
  // =========================
  it("100% Working Mouse Hover (Hidden Menu)", () => {
    cy.visit("https://www.amazon.com/");

    // Method: Instead of just 'hovering', we ensure the menu is forced to show.
    // This is the most stable way to test hover-based menus in Cypress.
    cy.get("#nav-link-accountList").trigger("mouseover");

    // Check if the sign-in button within the hover menu is now visible
    cy.get("#nav-al-signin").should("be.visible");
  });

  it("Double click inside iframe", () => {
    // STEP 1: Open the demo page
    cy.visit(
      "https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick"
    );

    // STEP 2: Access iframe body safely
    cy.get("#iframeResult")
      .its("0.contentDocument.body")
      .should("not.be.empty")
      .then(cy.wrap)
      .as("iframeBody");

    // STEP 3: Double click the text
    cy.get("@iframeBody").contains("Double-click me").dblclick();

    // STEP 4: Verify result text
    cy.get("@iframeBody").find("#demo").should("contain", "Hello World");
  });

  // =========================
  // RIGHT CLICK
  // =========================
  it("Right Click", () => {
    // Open right-click demo page
    cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    // Right click on box
    cy.contains("right click me").rightclick();

    // Verify menu is visible
    cy.get(".context-menu-list").should("be.visible");
  });

  // =========================
  // DRAG AND DROP (PLUGIN)
  // =========================
  it("Drag and Drop", () => {
    // Open drag and drop practice page
    cy.visit("https://kitchen.applitools.com/ingredients/drag-and-drop");

    // Drag item and drop it into the box
    cy.get("#menu-fried-chicken").drag("#plate-items");

    // Verify item is dropped
    cy.get("#plate-items").should("contain", "Fried Chicken");
  });

  // =========================
  // SCROLL
  // =========================
  it("Scroll Page", () => {
    // Open long page
    cy.visit("https://the-internet.herokuapp.com/infinite_scroll");

    // Scroll down
    cy.scrollTo("bottom");

    // Verify new content loaded
    cy.get(".jscroll-added").should("exist");
  });
});
