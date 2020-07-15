import * as api from "../../utils/JWTAuth.js";
import mockAxios from "axios";

describe("<RegisteredEvents />", () => {
  it("RegisteredEvents, display all registered events", async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
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
    const response = await api.getRegisteredEvent("apptest208@gmail.com");
    expect(response).toEqual({
      description: "Clean code chapter 1- 3. Come ready for the discussion.",
      eventId: "83",
      event_date: "2020-07-13",
      event_time: "10:00 am",
      location: "Zoom Meeting",
      title: "Clean code session 1",
    });
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
    expect(mockAxios.get).toHaveBeenCalledWith(
      "http://localhost:8080/react-php/api/getEventsById.php?userEmail=apptest208@gmail.com"
    );
  });
});
