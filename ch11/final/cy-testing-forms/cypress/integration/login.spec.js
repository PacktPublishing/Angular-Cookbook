/// <reference types="cypress" />

context('Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have the button disabled if the form inputs are not valid', () => {
    // https://on.cypress.io/title
    // No input values
    cy.contains('Submit').should('be.disabled');
    cy.get('#passwordInput').type('password123');
    cy.contains('Submit').should('be.disabled');

    cy.get('#emailInput').type('ahsanayaz@gmail.com');
    cy.get('#passwordInput').clear();
    cy.contains('Submit').should('be.disabled');
  });

  it('should submit the form with the correct values and show the success alert', () => {
    successfulLogin();
    cy.get('.alert.alert-success').should('be.visible');
  });

  it('should hide the success alert on clicking close button', () => {
    successfulLogin();
    cy.get('.alert.alert-success').find('.btn-close').click();
    cy.get('.alert.alert-success').should((domList) => {
      expect(domList.length).to.equal(0);
    });
  });

  it('should hide the success alert on changing the input', () => {
    successfulLogin();
    cy.get('#emailInput').clear().type('mohsin.ayaz@domain.com');
    cy.get('.alert.alert-success').should((domList) => {
      expect(domList.length).to.equal(0);
    });
  });

  it('should show the (required) input errors on invalid inputs', () => {
    ['#emailHelp', '#passwordHelp'].map((selector) => {
      cy.get(selector).should((domList) => expect(domList.length).to.equal(0));
    });
    cy.get('#emailInput').type('mohsin.ayaz@domain.com').clear().blur();
    cy.get('#emailHelp').should('be.visible');
    cy.get('#passwordInput').type('password123').clear().blur();
    cy.get('#passwordHelp').should('be.visible');
  });
});

function successfulLogin() {
  cy.get('#emailInput')
    .type('ahsan.ayaz@domain.com')
    .get('#passwordInput')
    .type('password123');
  cy.contains('Submit').click();
}
