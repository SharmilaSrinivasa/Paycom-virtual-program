import * as api from "../../utils/JWTAuth.js";
import mockAxios from "axios";

describe("<Dashboard />", () => {
  it("Dashboard, display unregistered events of the user", async () => {
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
    const response = await api.viewUnregisteredEvents("user1@gmail.com");
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
      "http://localhost:8080/react-php/api/unregistered.php?userEmail=user1@gmail.com"
    );
  });
});
