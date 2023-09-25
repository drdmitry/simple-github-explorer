import React from "react";
import { render } from "@testing-library/react";

import Header from "./";

describe("Header", () => {
  test("renders Header", () => {
    // Render the Header component
    const { container } = render(<Header />);
    const headerElement = container.querySelector("header");
    expect(headerElement).toBeInTheDocument();
  });

  test("renders Header unchanged", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
