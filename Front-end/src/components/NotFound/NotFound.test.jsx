import React from "react";
import ReactDom from "react-dom";
import NotFound from "./NotFound";

it("NotFound renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<NotFound />, div);
});
