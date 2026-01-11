import "cypress-file-upload";
describe("File Upload", () => {
  it("Single File Upload", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");

    cy.get("#file-upload").attachFile("Day-41.txt");

    cy.get("#file-submit").click();

    cy.get("#uploaded-files").should("contain", "Day-41.txt");
  });
  it("Single File Upload Rename", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");

    cy.get("#file-upload").attachFile({
      filePath: "Day-41.txt",
      fileName: "myfile.txt",
    });

    cy.get("#file-submit").click();

    cy.get("#uploaded-files").should("contain", "myfile.txt");
  });

  it("File Upload - Drag and Drop", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");

    cy.get("#file-upload").attachFile("Day-41.txt", {
      subjectType: "drag-n-drop",
    });

    cy.get("#file-submit").click();

    cy.get("#uploaded-files").should("contain", "Day-41.txt");
  });

  it("Multiple File Upload", () => {
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");

    cy.get("#filesToUpload").attachFile(["Day-41.txt", "Day-56.txt"]);

    cy.get("ul[id='fileList'] li").should("not.contain", "No Files Selected");
  });

  it.only("File Upload Shoadow DOM", () => {
    cy.visit(
      "https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm"
    );

    cy.get(
      "smart-file-upload:nth-child(1) > div:nth-child(1) > div:nth-child(1) > smart-button:nth-child(1) > button:nth-child(1)",
      { includeShadowDom: true }
    ).attachFile("Day-41.txt");
    cy.get(
      " smart-file-upload:nth-child(1) > div:nth-child(1) > div:nth-child(4) > smart-button:nth-child(1) > button:nth-child(1)",
      { includeShadowDom: true }
    ).click({ force: true });
  });
});
