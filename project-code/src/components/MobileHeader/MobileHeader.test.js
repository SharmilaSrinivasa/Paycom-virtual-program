import React from "react";
import ReactDom from "react-dom";
import MobileHeader from "./MobileHeader";

it("MobileHeader renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<MobileHeader />, div);
});
