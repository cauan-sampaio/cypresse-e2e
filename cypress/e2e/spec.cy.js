/// <reference types = "cypress" />
const data = require('../fixtures/dados.json')

const {dashboardPage} = require('../support/page-objects/index.js')
describe('Acessar AdminPage', () => {
  context('Given I visit EBAC Store', () => {
    before(() => {
      cy.visit('/')
      cy.wait(3000)
    });
  });
    context(`When I log in with user ${data.usuario} and pass ${data.senha}`, () => {
      beforeEach(() => {
        console.log(`Logging in with user: ${data.usuario}, pass: ${data.senha}`);
        cy.login(data.usuario, data.senha)
        cy.wait(1000)
       
      });
      it('Then the admin dashboard page should be visible', () => {
        dashboardPage.siteName.should("be.visible")
      });
    });
    
});