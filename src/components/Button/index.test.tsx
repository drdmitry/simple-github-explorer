import React from "react";
import { render } from "@testing-library/react";

import Button from "./";

describe("Button", () => {
  test("renders Button", () => {
    // Render the Button component
    const { getByText, container } = render(
      <Button>Button Content</Button>
    );

    // Assert that the button element exists and has the correct position
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveAttribute("type", "button");

    // Assert that the Button Content is rendered
    const contentElement = getByText("Button Content");
    expect(contentElement).toBeInTheDocument();
  });

  test("renders disabled Button", () => {
    // Render the Button component
    const { container } = render(
      <Button disabled>Button Content</Button>
    );

    // Assert that the button element is disabled
    const buttonElement = container.querySelector("button");
    expect(buttonElement).toHaveAttribute('disabled');
  });

  test("renders Button unchanged", () => {
    const { container } = render(<Button />);
    expect(container).toMatchSnapshot();
  });
});
