import * as api from "../../utils/JWTAuth.js";
import mockAxios from "axios";

describe("<Home />", () => {
  it("Home, display all events", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          RSVP: "3",
          description:
            "Clean code chapter 1- 3. Come ready for the discussion.",
          eventId: "83",
          event_date: "2020-07-13",
          event_time: "10:00 am",
          location: "Zoom Meeting",
          title: "Clean code session 1",
        },
      })
    );
    const response = await api.viewEvent();
    expect(response).toEqual({
      RSVP: "3",
      description: "Clean code chapter 1- 3. Come ready for the discussion.",
      eventId: "83",
      event_date: "2020-07-13",
      event_time: "10:00 am",
      location: "Zoom Meeting",
      title: "Clean code session 1",
    });
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});
