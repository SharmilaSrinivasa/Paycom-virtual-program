import React from "react";
import ReactDom from "react-dom";
import Welcome from "./Welcome";

it("Welcome renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<Welcome />, div);
});
