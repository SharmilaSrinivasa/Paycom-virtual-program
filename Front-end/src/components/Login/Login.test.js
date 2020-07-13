import React from "react";
import ReactDom from "react-dom";
import Login from "./Login";

it("Login renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<Login />, div);
});
