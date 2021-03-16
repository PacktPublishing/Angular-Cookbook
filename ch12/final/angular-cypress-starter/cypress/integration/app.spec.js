/// <reference types="cypress" />

context('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have the title "Writing your first Cypress test "', () => {
    // https://on.cypress.io/title
    cy.title().should('eq', 'Writing your first Cypress test');
  });
});
