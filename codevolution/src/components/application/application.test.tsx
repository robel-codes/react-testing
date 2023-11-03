import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      level: 1
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2
    });
    expect(sectionHeading).toBeInTheDocument();

    //using getByText
    //getByText can have a selector option to user for multiple elements with same content
    const paragraphElement = screen.getByText("All fields are mandatory"); //full string match
    // or ways to use TextMatch as string
    // screen.getByText('l fields are', {exact:false}) //substing match
    // screen.getByText('all fields are mandatory', {exact:false})  //ignore case

    //or using TextMatch as a regex
    // screen.getByText(/l fields are/)                  // substing match
    // screen.getByText(/l fields are/i)                  //substring match, ignore case
    // screen.getByText(/^all fields are mandatore$/i)   //full string match, ignore case

    //or using TextMatch as custom function
    //screen.getByText((content) => content.startsWith('All'))

    expect(paragraphElement).toBeInTheDocument();

    //using getByTitle
    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    //using getByAltText
    const imageElement = screen.getByAltText("a person with a laptop");
    expect(imageElement).toBeInTheDocument();

    //using getByTestId
    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Name"
    });
    expect(nameElement).toBeInTheDocument();

    //using getByLabelText
    const nameElement2 = screen.getByLabelText("Name");
    expect(nameElement2).toBeInTheDocument();

    //using getByPlaceholderText
    const nameElement3 = screen.getByPlaceholderText("Fullname");
    expect(nameElement3).toBeInTheDocument();

    //using getByDisplayValue
    const nameElement4 = screen.getByDisplayValue("John");
    expect(nameElement4).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", {
      name: "Bio"
    });
    expect(bioElement).toBeInTheDocument();

    const jobLocationElement = screen.getByRole("combobox");
    expect(jobLocationElement).toBeInTheDocument();

    const termsElement = screen.getByRole("checkbox");
    expect(termsElement).toBeInTheDocument();

    //using getByLabelText
    //getByLabelText can have a selector option to use for multiple elements havig same label text
    const termselement2 = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termselement2).toBeInTheDocument();

    const submitButtonElement = screen.getByRole("button");
    expect(submitButtonElement).toBeInTheDocument();
  });
});
// NB to get all the role of elements reference
// https://www.w3.org/TR/html-aria/#docconformance
