import "@testing-library/cypress/add-commands";
import "./commands";

Cypress.on("uncaught:exception", (err) => {
  // Cypress and React Hydrating the doc