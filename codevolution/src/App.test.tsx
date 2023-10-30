import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  // First we create a virtual dom of the app component using the render method for RTL
  render(<App />);

  // Next we use screen (an object that contains methods to query the virtual dom)
  // we use a query getByText which accepts a string or irregular experession as an arugment
  // we used a case insenstive regex with the word learn react
  const linkElement = screen.getByText(/learn react/i);

  //  we expect the linkElement to be in the document
  expect(linkElement).toBeInTheDocument();
});
