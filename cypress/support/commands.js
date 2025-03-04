
import { cy, Cypress } from "local-cypress";
import locators from "../support/locators";
const path = require('path');

//#region VARIABLES
let trackValue;
//#endregion

//#region Home
Cypress.Commands.add("login", function (emailKey, passwordKey) {
  cy.fixture("userData").then((userData) => {
    const email = userData[emailKey];
    const password = userData[passwordKey];
    cy.get(locators.HOME.userNameImput).type(email);
    cy.get(locators.HOME.passwordImput).type(password);
    cy.get(locators.HOME.loginButton).click();
    cy.wait(2000);
  });
});
//#endregion

//#region Products
Cypress.Commands.add('addToCart', (productName) => {
  // Verifica se o parâmetro é válido
  if (!productName || typeof productName !== 'string') {
    throw new Error('O nome do produto deve ser uma string válida!');
  }

  // Converte o nome do produto para o formato do data-test
  const formattedName = productName
    .toLowerCase()      // Converte para minúsculas
    .replace(/ /g, '-') // Substitui espaços por "-"
    .replace(/[^a-z0-9-]/g, ''); // Remove caracteres especiais

  const selector = `[data-test="add-to-cart-${formattedName}"]`;

  cy.get(selector).click();
});
//#endregion

export default null;
