//To capture screenshot and video run this command
// npx cypress run --spec cypress/e2e/D19_ScreenShotAndVideo.cy.js
//force video capture
// npx cypress run --spec cypress/e2e/D19_ScreenShotAndVideo.cy.js --config video=true
describe("Capture ScreenShot And Video", () => {
  it("Capture Scrren shot via Code", () => {
    cy.visit("https://practicetestautomation.com/practice/");

    //Capture Screenshot and Video

    /*
    cy.screenshot("homepage");
    cy.get(".post-title").screenshot("Title");
    */

    cy.get(".post-title").contains("PracticeS");
  });
});
