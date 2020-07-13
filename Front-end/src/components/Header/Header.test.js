import React from "react";
import ReactDom from "react-dom";
import Header from "./Header";

it("Header renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<Header />, div);
});
