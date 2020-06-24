import React from "react";
import ReactDom from "react-dom";
import UpdateEvent from "./UpdateEvent";

it("UpdateEvent renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<UpdateEvent />, div);
});
