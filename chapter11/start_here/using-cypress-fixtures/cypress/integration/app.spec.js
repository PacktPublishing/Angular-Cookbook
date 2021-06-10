/// <reference types="cypress" />

context('App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have the title "Cypress: Using fixtures to provide mock data"', () => {
    // https://on.cypress.io/title
    cy.title().should('eq', 'Cypress: Using fixtures to provide mock data');
  });
});
