import React from "react";
import { render } from "@testing-library/react";

import Page from "./";

// import { selectionContextValue } from "./mocks/mockData";

describe("SearchBar", () => {
  test("renders SearchBar", () => {
    // Mock the SelectionContext value
    // const mockCoordinates = { x: 100, y: 200 };
    // const contextValue = { ...selectionContextValue, coordinates: mockCoordinates };

    // Render the SearchBar component
    const {} = render(<Page />);
    // expect(container).toBeInTheDocument();

    // const svgElement = container.querySelector("svg");
    // expect(svgElement).toBeInTheDocument();

    // const inputElement = getByPlaceholderText("Search username");
    // expect(inputElement).toBeInTheDocument();
    // expect(inputElement).toBeInstanceOf(HTMLInputElement);
    // expect(inputElement).toHaveValue('');

    // // Assert that the Search Button is rendered
    // const buttonElement = getByText("Search");
    // expect(buttonElement).toBeInTheDocument();
    // expect(buttonElement).toBeInstanceOf(HTMLButtonElement);
  });

  test("renders Page unchanged", () => {
    const { container } = render(<Page />);
    expect(container).toMatchSnapshot();
  });
});
