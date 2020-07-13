import React from "react";
import ReactDom from "react-dom";
import RegisteredEvents from "./RegisteredEvents";

it("RegisteredEvents renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<RegisteredEvents />, div);
});
