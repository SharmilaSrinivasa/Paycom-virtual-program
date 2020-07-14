import React from "react";
import Signup from "./Signup";
import { configure, shallow } from "enzyme";
import * as api from "../../utils/JWTAuth.js";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const simulateChangeOnInput = (wrapper, inputSelector, newValue) => {
  const input = wrapper.find(inputSelector);
  input.simulate("change", {
    target: { value: newValue },
  });
  return wrapper.find(inputSelector);
};

describe("<Signup />", () => {
  beforeEach(() => jest.resetAllMocks());
  it("Singup, the role has a default value as User", () => {
    const wrapper = shallow(<Signup />);
    const roleSelect = wrapper.find("select");
    expect(roleSelect.props().value).toEqual("User");
  });

  it("Signup, fill out the form ", () => {
    const wrapper = shallow(<Signup />);
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

  it("Signup, submit the form to the api ", () => {
    jest
      .spyOn(api, "signup")
      .mockImplementation(() =>
        Promise.resolve({ message: "Singed up successfully!" })
      );
    const wrapper = shallow(<Signup />);
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
    expect(api.signup).toHaveBeenCalledWith({
      email: "user1@gmail.com",
      password: "test123",
      role: "User",
    });
  });
});
