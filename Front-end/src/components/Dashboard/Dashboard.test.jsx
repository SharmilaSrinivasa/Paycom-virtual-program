import React from "react";
import ReactDom from "react-dom";
import Dashboard from "./Dashboard";

it("Dashboard renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<Dashboard />, div);
});
