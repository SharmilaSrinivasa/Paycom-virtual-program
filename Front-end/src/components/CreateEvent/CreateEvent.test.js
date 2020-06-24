import React from "react";
import ReactDom from "react-dom";
import CreateEvent from "./CreateEvent";

it("CreateEvent renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<CreateEvent />, div);
});
