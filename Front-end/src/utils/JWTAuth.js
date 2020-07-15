import axios from "axios";

// signup method
const signup = async (data) => {
  const SIGNUP_ENDPOINT = `http://localhost:8080/react-php/api/signup.php`;
  try {
    let response = await axios({
      method: "post",
      responseType: "json",
      url: SIGNUP_ENDPOINT,
      data: data,
    });
    return response.config.data;
  } catch (e) {
    console.log(e);
    return 0;
  }
};

// login method
const login = async (data) => {
  const LOGIN_ENDPOINT = `http://localhost:8080/react-php/api/login.php`;

  try {
    let response = await axios.post(LOGIN_ENDPOINT, data);
    //console.log(response);
    if (
      response.status === 200 &&
      response.data.jwt &&
      response.data.expireAt
    ) {
      let jwt = response.data.jwt;
      let expire_at = response.data.expireAt;

      localStorage.setItem("access_token", jwt);
      localStorage.setItem("expire_at", expire_at);
      return response.config.data;
    }
  } catch (e) {
    console.log(e);
  }
};

// forgotPassword method
const forgotPassword = async (email) => {
  const FORGOT_ENDPOINT = `http://localhost:8080/react-php/api/forgotPassword.php?sendto=`;
  try {
    let response = await axios.get(FORGOT_ENDPOINT + email);
    return response;
  } catch (e) {
    console.log(e);
  }
};

// passwordReset method
const passwordReset = async (obj, email) => {
  try {
    let response = await axios.post(
      "http://localhost:8080/react-php/api/resetPassword.php?sendto=" + email,
      obj
    );
    // console.log(response);
    return response;
  } catch (e) {
    console.log(e);
  }
};

// logout method
const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("expire_at");
};

// createEvent method
const createEvent = async (data) => {
  const CREATE_ENDPOINT = `http://localhost:8080/react-php/api/insert.php`;
  try {
    let response = await axios({
      method: "post",
      responseType: "json",
      url: CREATE_ENDPOINT,
      data: data,
    });
    return response;
  } catch (e) {
    console.log(e);
    return 0;
  }
};

// viewEvent method
const viewEvent = async () => {
  const VIEW_ENDPOINT = `http://localhost:8080/react-php/api/view.php`;
  try {
    let response = await axios.get(VIEW_ENDPOINT);
    return response;
  } catch (e) {
    console.log(e);
  }
};

// getEventDetailById method
const getEventDetailById = async (data) => {
  const GETEVENT_ENDPOINT = `http://localhost:8080/react-php/api/getById.php?id=`;
  try {
    let response = await axios.get(GETEVENT_ENDPOINT + data);
    return response;
  } catch (e) {
    console.log(e);
  }
};

// updateEvent method
const updateEvent = async (obj, id) => {
  try {
    let response = await axios.post(
      "http://localhost:8080/react-php/api/update.php?id=" + id,
      obj
    );
    //console.log(response);
    return response;
  } catch (e) {
    console.log(e);
    return 0;
  }
};

// deleteEvent method
const deleteEvent = async (id) => {
  const DELETEEVENT_ENDPOINT = `http://localhost:8080/react-php/api/delete.php?id=`;
  try {
    let response = await axios.get(DELETEEVENT_ENDPOINT + id);
    return response;
  } catch (e) {
    console.log(e);
  }
};

// viewUnregisteredEvents method
const viewUnregisteredEvents = async (email) => {
  const UNREGSEVENT_ENDPOINT = `http://localhost:8080/react-php/api/unregistered.php?userEmail=`;
  try {
    let response = await axios.get(UNREGSEVENT_ENDPOINT + email);
    return response;
  } catch (e) {
    console.log(e);
  }
};

// registerEvent method
const registerEvent = async (obj, eventId) => {
  try {
    let response = await axios.post(
      "http://localhost:8080/react-php/api/registerEvent.php?eventId=" +
        eventId,
      obj
    );
    //console.log(response);
    return response;
  } catch (e) {
    console.log(e);
    return 0;
  }
};

// getRegisteredEvent method
const getRegisteredEvent = async (email) => {
  const GETREGSEVENT_ENDPOINT = `http://localhost:8080/react-php/api/getEventsById.php?userEmail=`;
  try {
    let response = await axios.get(GETREGSEVENT_ENDPOINT + email);
    return response;
  } catch (e) {
    console.log(e);
  }
};

export {
  login,
  signup,
  logout,
  createEvent,
  viewEvent,
  getEventDetailById,
  updateEvent,
  deleteEvent,
  forgotPassword,
  passwordReset,
  viewUnregisteredEvents,
  registerEvent,
  getRegisteredEvent,
};
