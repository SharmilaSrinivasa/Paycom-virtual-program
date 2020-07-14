import React from "react";
import Signup from "./Signup";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("<Signup />", () => {
  it("Singup, the role has a default value as User", () => {
    const wrapper = shallow(<Signup />);
    const roleSelect = wrapper.find("select");
    expect(roleSelect.props().value).toEqual("User");
  });
});
