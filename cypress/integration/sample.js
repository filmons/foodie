

describe('My First Test', () => {
    it('Does not do much!', () => {
      //expect(true).to.equal(true)
      cy.visit("http://example.cypress.io");
    
      cy.contains('type')
    })

  })
// sample.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

// 
// describe("Home", () => {
//     it("Test case name", () => {
//       cy.visit("http://localhost:3000");
//       // put your assertions here
//     });
//   });