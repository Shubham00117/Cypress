//Hooks-----------
//Before
//After
//BeforeEach
//AfterEach
//Tags------------
//skip
//only

describe("Hooks", () => {
  before("Before all it block", () => {
    cy.log("********* Launch the App  ***********");
  });

  after("After all it block", () => {
    cy.log("******** Close The app **********");
  });

  beforeEach("Before each it block", () => {
    cy.log("******** Login **********");
  });

  afterEach("after each it block", () => {
    cy.log("******** Logout **********");
  });

  it.skip("Search", () => {
    cy.log("************* Searching ************");
  });
  it.only("Advance Search", () => {
    cy.log("***************** Advance Searching ************");
  });
  it("List Product", () => {
    cy.log("***************** Listing Product ************");
  });
});
