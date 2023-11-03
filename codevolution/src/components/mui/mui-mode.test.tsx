// import { render, screen } from "@testing-library/react";
import { render, screen } from "../../test-utils";
import { MuiMode } from "./mui-mode";
import { AppProviders } from "../../providers/app-providers";

// describe("MuiMode", () => {
//   test("renders text correctly", () => {
//     render(<MuiMode />, {
//       wrapper: AppProviders // wraps MuiMode component with AppProviders befor rendering
//     });

//     const headingElement = screen.getByRole("heading");
//     expect(headingElement).toHaveTextContent("dark mode");
//   });
// });

// OR
// using custom renders function
describe("MuiMode", () => {
  test("renders text correctly", () => {
    render(<MuiMode />, {});

    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("dark mode");
  });
});
