const { setupServer } = require("msw/node");

const server = setupServer();

server.listen({ onUnhandledRequest: "bypass" });
console.inf