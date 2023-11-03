import { render, screen, logRoles } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of Skils", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem");
    expect(listItemElements).toHaveLength(skills.length);
  });

  test("renders Login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Login"
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("Start Learning button is not rendered", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "Start learning"
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  //findBy
  test("Start Learning button is eventually displayed", async () => {
    render(<Skills skills={skills} />);
    // screen.debug(); // to visualize a formatted state of the DOM tree at any point during the test
    const startLearningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning"
      },
      {
        timeout: 2000 // if we want to change the default timeout of 1000ms
      }
    );
    // screen.debug();
    expect(startLearningButton).toBeInTheDocument();
  });

  // using log roles - to list out all the implict aria roles within the dom tree
  //   test("Start Learning button is eventually displaxxxxxxxxyed", async () => {
  //     const view = render(<Skills skills={skills} />);
  //     logRoles(view.container);
  //     const startLearningButton = await screen.findByRole(
  //       "button",
  //       {
  //         name: "Start learning"
  //       },
  //       {
  //         timeout: 2000 // if we want to change the default timeout of 1000ms
  //       }
  //     );

  //     expect(startLearningButton).toBeInTheDocument();
  //   });
});
