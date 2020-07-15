import React from "react";
import UpdateEvent from "./UpdateEvent";
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

describe("<UpdateEvent />", () => {
  beforeEach(() => jest.resetAllMocks());
  window.alert = jest.fn();
  it("UpdateEvent, fill out the form ", () => {
    const wrapper = shallow(<UpdateEvent />);
    const titleInput = simulateChangeOnInput(
      wrapper,
      "#title-input",
      "Clean code session 4"
    );
    const dateInput = simulateChangeOnInput(
      wrapper,
      "#date-input",
      "07/19/2020"
    );
    const timeInput = simulateChangeOnInput(wrapper, "#time-input", "11:00 AM");
    const locationInput = simulateChangeOnInput(
      wrapper,
      "#location-input",
      "Zoom meeting"
    );
    const textareaInput = simulateChangeOnInput(
      wrapper,
      "#textarea-input",
      "Clean code chapter: 11-13"
    );
    expect(titleInput.props().value).toEqual("Clean code session 4");
    expect(dateInput.props().value).toEqual("07/19/2020");
    expect(timeInput.props().value).toEqual("11:00 AM");
    expect(locationInput.props().value).toEqual("Zoom meeting");
    expect(textareaInput.props().value).toEqual("Clean code chapter: 11-13");
  });

  it("UpdateEvent, submit the form to the api ", () => {
    window.alert.mockClear();
    jest
      .spyOn(api, "updateEvent")
      .mockImplementation(() => Promise.resolve({ message: "Event Updated!" }));
    const wrapper = shallow(<UpdateEvent />);
    const titleInput = simulateChangeOnInput(
      wrapper,
      "#title-input",
      "Clean code session 4"
    );
    const dateInput = simulateChangeOnInput(
      wrapper,
      "#date-input",
      "07/19/2020"
    );
    const timeInput = simulateChangeOnInput(wrapper, "#time-input", "11:00 AM");
    const locationInput = simulateChangeOnInput(
      wrapper,
      "#location-input",
      "Zoom meeting"
    );
    const textareaInput = simulateChangeOnInput(
      wrapper,
      "#textarea-input",
      "Clean code chapter: 11-13"
    );
    wrapper.find("Form").simulate("submit", {
      preventDefault: () => {},
    });

    const obj = {
      titleInput,
      dateInput,
      timeInput,
      locationInput,
      textareaInput,
    };
    const id = 83;
    expect(api.updateEvent(obj, id));
  });
});
