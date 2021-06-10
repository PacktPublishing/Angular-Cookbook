/// <reference types="cypress" />

context('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have the title "Cypress: Using bundled packages"', () => {
    // https://on.cypress.io/title
    cy.title().should('eq', 'Cypress: Using bundled packages');
  });
});
