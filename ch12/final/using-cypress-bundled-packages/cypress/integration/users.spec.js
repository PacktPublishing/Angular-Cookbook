/// <reference types="cypress" />

import API_USERS from '../constants/API_USERS';

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
    cy.intercept('https://api.randomuser.me/*').as('searchUsers');
    cy.get('#searchInput').type('irin');
    cy.wait('@searchUsers');
    cy.get('app-user-card').should((domList) => {
      expect(domList.length).equal(1);
    });
  });

  it('should have the search button disabled when there is no input', () => {
    const submitButton = Cypress.$('#userSearchSubmit');
    cy.wrap(submitButton).should('have.attr', 'disabled');
    cy.get('#searchInput').type('irin');
    cy.wrap(submitButton).should('not.have.attr', 'disabled');
  });

  it('should return the same users as the seed data every time', async () => {
    const { _ } = Cypress;
    const response = await cy.request(
      'https://api.randomuser.me/?results=10&seed=packt'
    );
    const propsToCompare = ['name.first', 'name.last', 'email'];
    const results = _.get(response, 'body.results');
    _.each(results, (user, index) => {
      const apiUser = API_USERS[index];
      _.each(propsToCompare, (prop) => {
        const userPropVal = _.get(user, prop);
        const apiUserPropVal = _.get(apiUser, prop);
        return expect(userPropVal).to.equal(apiUserPropVal);
      });
    });
  });

  it('should show the formatted date of birth on the user card', () => {
    const { _, moment } = Cypress;
    const apiUserDate = _.get(API_USERS[0], 'dob.date');
    const apiUserDateFormatted = moment(apiUserDate).format(
      'dddd, MMMM D, YYYY'
    );
    cy.get('app-user-card')
      .eq(0)
      .find('#userCardDOB')
      .should((el) => {
        expect(el.text().trim()).to.equal(apiUserDateFormatted);
      });
  });

  it('should go to the user details page with the user uuid', () => {
    const { minimatch } = Cypress;
    cy.get('app-user-card').eq(0).click();
    const expectedURL = `http://localhost:4200/users/${API_USERS[0].login.uuid}`;
    cy.url().should((url) => {
      const urlMatches = minimatch(url, `${expectedURL}*`);
      expect(urlMatches).to.equal(true);
    });
  });
});
