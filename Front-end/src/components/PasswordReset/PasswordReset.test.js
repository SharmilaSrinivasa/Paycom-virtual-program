import React from "react";
import PasswordReset from "./PasswordReset";
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

describe("<PasswordReset />", () => {
  beforeEach(() => jest.resetAllMocks());
  it("PasswordReset, fill out the form ", () => {
    const wrapper = shallow(<PasswordReset />);
    const passwordInput = simulateChangeOnInput(
      wrapper,
      "#password-input",
      "test123"
    );
    expect(passwordInput.props().value).toEqual("test123");
  });

  /* it("PasswordReset, submit the form to the api ", () => {
    jest
      .spyOn(api, "passwordReset")
      .mockImplementation(() =>
        Promise.resolve({ message: "Password updated!" })
      );
    const wrapper = shallow(<PasswordReset />);
    const passwordInput = simulateChangeOnInput(
      wrapper,
      "#password-input",
      "test123"
    );
    wrapper.find("Form").simulate("submit", {
      preventDefault: () => {},
    });
    expect(api.passwordReset).toHaveBeenCalledWith({ password: "test123" });
  }); */
});
