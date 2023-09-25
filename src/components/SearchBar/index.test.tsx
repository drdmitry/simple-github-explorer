import React from "react";
import { render, fireEvent } from "@testing-library/react";

import SearchBar from "./";

describe("SearchBar", () => {
  test("renders SearchBar", () => {
    // Render the SearchBar component
    const { getByText, getByPlaceholderText, container } = render(
      <SearchBar />
    );
    expect(container).toBeInTheDocument();

    const svgElement = container.querySelector("svg");
    expect(svgElement).toBeInTheDocument();

    const inputElement = getByPlaceholderText("Search username");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toBeInstanceOf(HTMLInputElement);
    expect(inputElement).toHaveValue('');

    // Assert that the Search Button is rendered
    const buttonElement = getByText("Search");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeInstanceOf(HTMLButtonElement);
  });

  test('handles input change and validation', () => {
    const { getByPlaceholderText, getByText } = render(<SearchBar />);
    const inputElement = getByPlaceholderText('Search username');

    // Simulate valid input
    fireEvent.change(inputElement, { target: { value: 'valid-username' } });
    expect(inputElement).toHaveValue('valid-username');

    // Simulate invalid input
    fireEvent.change(inputElement, { target: { value: '-invalid-username' } });
    expect(inputElement).toHaveValue('-invalid-username');
    expect(getByText('Username can only contain alphanumeric characters and hyphens, and it cannot start or end with a hyphen')).toBeInTheDocument();
  });

  test("renders SearchBar unchanged", () => {
    const { container } = render(<SearchBar />);
    expect(container).toMatchSnapshot();
  });
});
