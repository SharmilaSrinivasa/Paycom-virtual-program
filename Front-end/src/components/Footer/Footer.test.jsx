import React from "react";
import ReactDom from "react-dom";
import Footer from "./Footer";

it("Footer renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<Footer />, div);
});
