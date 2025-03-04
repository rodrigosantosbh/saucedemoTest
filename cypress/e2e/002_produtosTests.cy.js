/* eslint-disable max-len */
/* eslint-disable new-cap */
/// <reference types="Cypress" />
import { cy } from "local-cypress";
import locators from "../support/locators";

describe('Teste Produtos', () => {
  beforeEach(() => {

    cy.visit(Cypress.config('prod'));
    cy.login("standard_user", "password_standard_user");
  });

  it('Adiciona produto no carrinho...', function() {
      cy.addToCart('Sauce Labs Backpack');
      cy.contains('Remove');
      cy.contains(locators.PRODUTOS.notificationIcon, '1').should('be.visible');
      cy.get(locators.PRODUTOS.cart).click();
      cy.contains('Your Cart');
      cy.contains('QTY');
      cy.contains('Description');
      cy.contains('Sauce Labs Backpack');
      cy.contains('$');
      cy.contains('Remove');
      cy.contains('Continue Shopping');
      cy.contains('Checkout');    
    });

    it('Realiza compra com sucesso...', function() {
      cy.addToCart('Sauce Labs Backpack');
      cy.contains('Remove');
      cy.contains(locators.PRODUTOS.notificationIcon, '1').should('be.visible');
      cy.get(locators.PRODUTOS.cart).click();
      cy.contains('Your Cart');
      cy.contains('QTY');
      cy.contains('Description');
      cy.contains('Sauce Labs Backpack');
      cy.contains('$');
      cy.contains('Remove');
      cy.contains('Continue Shopping');
      cy.contains('Checkout'); 

      cy.get(locators.PRODUTOS.checkoutButton).click();
      cy.contains('Checkout: Your Information');

      cy.get(locators.PRODUTOS.firstNameImput).type('Rodrigo');
      cy.get(locators.PRODUTOS.lastNameImput).type('Santos');
      cy.get(locators.PRODUTOS.zipCodeImput).type('12345-6789');
      cy.get(locators.PRODUTOS.continueButton).click();

      cy.contains('Checkout: Overview');
      cy.contains('SauceCard #');
      cy.contains('Payment Information');
      cy.contains('Shipping Information');
      cy.contains('Price Total');
      cy.get(locators.PRODUTOS.finishCheckout).click();

      cy.contains('Thank you for your order!');
      cy.contains('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
      cy.contains('Back Home');
      
      
    });
});