import React from "react";
import ReactDom from "react-dom";
import Home from "./Home";

it("Home renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<Home />, div);
});
