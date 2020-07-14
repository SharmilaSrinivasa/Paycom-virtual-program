import React from "react";
import Login from "./Login";
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

describe("<Login />", () => {
  beforeEach(() => jest.resetAllMocks());
  it("Login, the role has a default value as User", () => {
    const wrapper = shallow(<Login />);
    const roleSelect = wrapper.find("select");
    expect(roleSelect.props().value).toEqual("User");
  });

  it("Login, fill out the form ", () => {
    const wrapper = shallow(<Login />);
    const roleInput = simulateChangeOnInput(wrapper, "#role-input", "User");
    const emailInput = simulateChangeOnInput(
      wrapper,
      "#email-input",
      "user1@gmail.com"
    );
    const passwordInput = simulateChangeOnInput(
      wrapper,
      "#password-input",
      "test123"
    );
    expect(roleInput.props().value).toEqual("User");
    expect(emailInput.props().value).toEqual("user1@gmail.com");
    expect(passwordInput.props().value).toEqual("test123");
  });

  it("Login, submit the form to the api ", () => {
    jest
      .spyOn(api, "login")
      .mockImplementation(() =>
        Promise.resolve({ message: "Logged in successfully!" })
      );
    const wrapper = shallow(<Login />);
    const roleInput = simulateChangeOnInput(wrapper, "#role-input", "User");
    const emailInput = simulateChangeOnInput(
      wrapper,
      "#email-input",
      "user1@gmail.com"
    );
    const passwordInput = simulateChangeOnInput(
      wrapper,
      "#password-input",
      "test123"
    );
    wrapper.find("Form").simulate("submit", {
      preventDefault: () => {},
    });
    expect(api.login).toHaveBeenCalledWith({
      email: "user1@gmail.com",
      password: "test123",
      role: "User",
    });
  });
});
