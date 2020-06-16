import React from "react";
import { render } from "@testing-library/react";
import MobileHeader from "./MobileHeader";

test("MobileHeader renders learn react link", () => {
  const { getByText } = render(<MobileHeader />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
