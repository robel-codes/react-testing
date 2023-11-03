// src/mocks/node.js
import { setupServer } from "msw/node";
import { handlers } from "./handlers";

export const server = setupServer(...handlers);

// //Establish API mocking before all tests
// beforeAll(() => server.listen());

// // Rest any reuest handlers that we may add during the tests,
// // so they don't affect other tests.
// afterEach(() => server.resetHandlers());

// // Clean up after the tests are finished
// afterAll(() => server.close());
