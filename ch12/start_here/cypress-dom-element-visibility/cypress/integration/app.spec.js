/// <reference types="cypress" />

context('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have the title "Validating if a DOM element is visible on the view"', () => {
    // https://on.cypress.io/title
    cy.title().should(
      'eq',
      'Validating if a DOM element is visible on the view'
    );
  });
});
