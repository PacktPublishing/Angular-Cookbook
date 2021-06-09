/// <reference types="cypress" />

context('Users', () => {
  beforeEach(() => {
    cy.visit('/users');
  });

  it('should get the users list from the server and display', () => {
    cy.get('app-user-card').should((domList) => {
      expect(domList.length).equal(10);
    });
  });

  it('should get the users list on searching', () => {
    cy.get('#searchInput').type('irin');
    cy.get('app-user-card').should((domList) => {
      expect(domList.length).equal(1);
    });
  });
});
