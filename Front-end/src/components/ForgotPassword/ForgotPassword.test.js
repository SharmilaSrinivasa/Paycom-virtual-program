import React from "react";
import ForgotPassword from "./ForgotPassword";
import * as api from "../../utils/JWTAuth.js";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const simulateChangeOnInput = (wrapper, inputSelector, newValue) => {
  const input = wrapper.find(inputSelector);
  input.simulate("change", {
    target: { value: newValue },
  });
  return wrapper.find(inputSelector);
};

describe("<ForgotPassword />", () => {
  beforeEach(() => jest.resetAllMocks());
  it("ForgotPassword, fill out the form ", () => {
    const wrapper = shallow(<ForgotPassword />);
    const emailInput = simulateChangeOnInput(
      wrapper,
      "#email-input",
      "user1@gmail.com"
    );
    expect(emailInput.props().value).toEqual("user1@gmail.com");
  });

  it("ForgotPassword, submit the form to the api ", () => {
    jest
      .spyOn(api, "forgotPassword")
      .mockImplementation(() => Promise.resolve({ message: "Email sent!" }));
    const wrapper = shallow(<ForgotPassword />);
    const emailInput = simulateChangeOnInput(
      wrapper,
      "#email-input",
      "user1@gmail.com"
    );
    wrapper.find("Form").simulate("submit", {
      preventDefault: () => {},
    });
    expect(api.forgotPassword).toHaveBeenCalledWith("user1@gmail.com");
  });
});
