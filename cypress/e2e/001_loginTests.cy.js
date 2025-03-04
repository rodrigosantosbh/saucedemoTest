/* eslint-disable max-len */
/* eslint-disable new-cap */
/// <reference types="Cypress" />
import { cy } from "local-cypress";
import locators from "../support/locators";

describe('Testes Login', () => {
  beforeEach(() => {

    cy.visit(Cypress.config('prod'));
  });

  it('Realizar login com sucesso...', function() {
      cy.get(locators.HOME.userNameImput).type('standard_user');
      cy.get(locators.HOME.passwordImput).type('secret_sauce');
      cy.get(locators.HOME.loginButton).click();

      cy.contains('Products').should('be.visible');      
    });

    it('Valida login com dados invalidos...', function() {
      cy.get(locators.HOME.userNameImput).type('teste');
      cy.get(locators.HOME.passwordImput).type('teste123');
      cy.get(locators.HOME.loginButton).click();

      cy.contains('Epic sadface: Username and password do not match any user in this service').should('be.visible');
    });

    it('Valida logout com sucesso...', function() {
      cy.get(locators.HOME.userNameImput).type('standard_user');
      cy.get(locators.HOME.passwordImput).type('secret_sauce');
      cy.get(locators.HOME.loginButton).click();
      cy.get(locators.HOME.sideMenuButton).click();
      cy.get(locators.HOME.logoutButton).click();
      
      cy.contains('Login').should('be.visible');
    });
});