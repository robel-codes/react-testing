import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

// test("Greet renders correctly", () => {
//   render(<Greet />);
//   const textElement = screen.getByText(/hello/i);
//   expect(textElement).toBeInTheDocument();
// });

// Using TDD approach
// test("Greet renders correctly", () => {
//   render(<Greet />);
//   const textElement = screen.getByText("Hello");
//   expect(textElement).toBeInTheDocument();
// });

// test("Greet renders with a name", () => {
//   render(<Greet name="Robel" />);
//   const textElement = screen.getByText("Hello Robel");
//   expect(textElement).toBeInTheDocument();
// });

// using describe to group together multiple tests
describe("Greet", () => {
  test("renders correctly", () => {
    render(<Greet />);
    const textElement = screen.getByText("Hello");
    expect(textElement).toBeInTheDocument();
  });

  describe("nested", () => {
    test(" renders with a name", () => {
      render(<Greet name="Robel" />);
      const textElement = screen.getByText("Hello Robel");
      expect(textElement).toBeInTheDocument();
    });
  });
});
