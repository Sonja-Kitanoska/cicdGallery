/// <reference types="cypress" />

describe('template spec', () => {
  beforeEach(() => {
    // cy.visit('http://127.0.0.1:5173/');
    cy.visit('https://google.com');
  });
  // describe('checking HTML', () => {
  //   it('should have 10 images', () => {
  //     cy.get('.main-container__searchbar').type('cats');
  //     // cy.get('#search-btn').click();
  //     // cy.get('main').find('img').should('have.length', 10);
  //   });
  // });
});

export {};
