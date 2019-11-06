/// <reference types="Cypress" />

describe('Initial test suite', () => {
  it('should get code coverage', () => {
    cy.visit('http://localhost:4200');
    cy.get('li').should('have.length', 3);
  });

});
