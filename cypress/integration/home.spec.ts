describe('Initial test suite', () => {
  it('should behave...', () => {
    cy.visit("http://localhost:4200")
    cy.get('li').should('have.length', 3);
  });

});
