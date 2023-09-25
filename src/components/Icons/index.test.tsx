import React from "react";
import { render } from "@testing-library/react";

import SvgIcon from "./SvgIcon";

// import { selectionContextValue } from "./mocks/mockData";

describe("SvgIcon", () => {
  test("renders SvgIcon", () => {
    // Render the SvgIcon component
    const { container } = render(<SvgIcon name="chevron-up"/>);
    expect(container).toBeInTheDocument();

    const svgElement = container.querySelector("svg");
    expect(svgElement).toBeInTheDocument();
  });

  test("renders SvgIcon unchanged", () => {
    const { container } = render(<SvgIcon name="chevron-down" />);
    expect(container).toMatchSnapshot();
  });

  test("renders non-existing SvgIcon as null", () => {
    // @ts-ignore
    const { container } = render(<SvgIcon name="not-existing" />);
    expect(container).toBeEmptyDOMElement();
  });
});
