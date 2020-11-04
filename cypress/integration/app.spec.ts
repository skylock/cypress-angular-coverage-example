/// <reference types="Cypress" />

describe('Todo App - Angular', () => {

  beforeEach( () => {
    // By default Cypress will automatically
    // clear the Local Storage prior to each
    // test which ensures no todos carry over
    // between tests.
    //
    // Go out and visit our local web server
    // before each test, which serves us the
    // Todo App we want to test against
    //
    // We've set our baseUrl to be http://localhost:4200
    // which is automatically prepended to cy.visit
    //
    // https://on.cypress.io/api/visit
    cy.visit('/');
  });

  // a very simple example
  it('adds 2 todos', () => {
    cy.get('[data-cy=todo]')
    .type('learn testing{enter}')
    .type('be cool{enter}');

    cy.get('[data-cy=list-item]').should('have.length', 2);
  });


  it.skip('deletes a todo', () => {
    cy.get('[data-cy=todo]')
    .type('learn testing{enter}')
    .type('be cool{enter}');

    cy.get('[data-cy=delete]').first().click();

    cy.get('[data-cy=list-item]').should('have.length', 1);
  });


});
