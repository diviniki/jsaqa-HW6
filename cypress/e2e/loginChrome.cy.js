beforeEach(() => {
  cy.viewport(2560, 1600);
  cy.visit("/");
})

describe('happy path suite', { browser: 'chrome' }, () => {
  it("Should successfully login", () => {
    //cy.visit("/booksNode");
    cy.login("test@test.com", "test");
    cy.contains("Добро пожаловать test@test.com").should("be.visible");
  });
  
  it("Should not login with empty login", () => {
    //cy.visit("/booksNode");
    cy.contains("Log in").click();
    cy.get("#mail").type(" ");
    cy.get("#pass").type("test");
    cy.contains("Submit").click();
    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
    cy.get("#mail")
      .then(($el) => $el[0].validationMessage)
      .should("contain", "Заполните это поле.");
  });
  
  it("Should not login with empty password", () => {
    //cy.visit("/booksNode");
    cy.contains("Log in").click();
    cy.get("#mail").type("test@test.com");
    cy.contains("Submit").click();
    cy.get("#pass")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });
  
  it("Should add book", () => {
    cy.login("test@test.com", "test");
    cy.get("button.btn.btn-warning").click();
    cy.get("input#title").type("Harry Potter Part 1");
    cy.get("input#description").type("Good book");
    cy.get("button.ml-2.btn-success").click();
  });
  
  it("Should add book to favourite", () => {
    cy.login("test@test.com", "test");
    cy.get("button.btn.btn-success")/*.click({ multiple: true, timeout: 10000 })*/.first();
    cy.get("button.btn.btn-secondary")
        .should("contain", "Delete from favorite");
  });
  
  it("Should open favourite books", () => {
    cy.login("test@test.com", "test");
    cy.get("h4").click();
    cy.get(".h5")
        .should("contain", "Harry Potter Part 1");
  });
})