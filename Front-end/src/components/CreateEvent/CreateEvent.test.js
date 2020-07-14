import React from "react";
import CreateEvent from "./CreateEvent";
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

describe("<CreateEvent />", () => {
  beforeEach(() => jest.resetAllMocks());
  window.alert = jest.fn();
  it("CreateEvent, fill out the form ", () => {
    const wrapper = shallow(<CreateEvent />);
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

  it("CreateEvent, reset the filled form ", () => {
    const wrapper = shallow(<CreateEvent />);
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
    const resetBtn = wrapper.find('Button[type="button"]');
    resetBtn.simulate("click");
    expect(wrapper.find("#title-input").props().value).toEqual("");
    expect(wrapper.find("#date-input").props().value).toEqual("");
    expect(wrapper.find("#time-input").props().value).toEqual("");
    expect(wrapper.find("#location-input").props().value).toEqual("");
    expect(wrapper.find("#textarea-input").props().value).toEqual("");
  });

  it("CreateEvent, submit the form to the api ", () => {
    window.alert.mockClear();
    jest
      .spyOn(api, "createEvent")
      .mockImplementation(() => Promise.resolve({ message: "Saved Events!" }));
    const wrapper = shallow(<CreateEvent />);
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
    expect(api.createEvent).toHaveBeenCalledWith({
      description: "Clean code chapter: 11-13",
      event_date: "07/19/2020",
      event_time: "11:00 AM",
      event_title: "Clean code session 4",
      location: "Zoom meeting",
    });
  });
});
