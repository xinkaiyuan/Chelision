import "@testing-library/cypress/add-commands";
import "./commands";

Cypress.on("uncaught:exception", (err) => {
  // Cypress and React Hydrating the document don't get along
  // for some unknown reason. Hopefu