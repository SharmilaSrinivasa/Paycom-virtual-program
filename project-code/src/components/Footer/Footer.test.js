import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

test("Footer renders learn react link", () => {
  const { getByText } = render(<Footer />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
