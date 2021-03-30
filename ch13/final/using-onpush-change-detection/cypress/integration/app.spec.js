/// <reference types="cypress" />

context('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have the title "Cypress: Waiting for XHR calls"', () => {
    // https://on.cypress.io/title
    cy.title().should('eq', 'Cypress: Waiting for XHR calls');
  });
});
