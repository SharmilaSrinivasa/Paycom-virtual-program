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
    console.log("response:", response.config.data);
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
    console.log(response);

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

// logout method
const logout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("expire_at");
};

export { login, signup, logout };
