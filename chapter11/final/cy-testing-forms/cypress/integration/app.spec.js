/// <reference types="cypress" />

context('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have the title "Testing form inputs and submission"', () => {
    // https://on.cypress.io/title
    cy.title().should('eq', 'Testing form inputs and submission');
  });
});
