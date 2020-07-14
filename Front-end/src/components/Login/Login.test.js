import React from "react";
import Login from "./Login";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<Login />", () => {
  it("Login, the role has a default value as User", () => {
    const wrapper = shallow(<Login />);
    const roleSelect = wrapper.find("select");
    expect(roleSelect.props().value).toEqual("User");
  });
});
