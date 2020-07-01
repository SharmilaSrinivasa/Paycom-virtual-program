import React from "react";
import ReactDom from "react-dom";
import ForgotPassword from "./ForgotPassword";

it("ForgotPassword renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<ForgotPassword />, div);
});
