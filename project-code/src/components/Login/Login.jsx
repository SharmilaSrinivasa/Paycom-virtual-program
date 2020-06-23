import React, { Component } from "react";
import "./Login.css";
import { PostData } from "../../services/PostData";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      redirectToReferrer: false,
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login() {
    console.log("Login Function");
    if (this.state.email && this.state.password) {
      PostData("login", this.state).then((result) => {
        let responseJson = result;
        if (responseJson.userData) {
          sessionStorage.setItem("userData", JSON.stringify(responseJson));
          this.setState({ redirectToReferrer: true });
        }
      });
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  render() {
    if (this.state.redirectToReferrer || sessionStorage.getItem("userData")) {
      return <Redirect to={"/home"} />;
    }

    return (
      <div className="row">
        <div className="column bodypart">
          <form>
            <p className="forgot-password text-right">
              Don't have an account? <a href="/signup">Signup</a>
            </p>
            <h3>Login</h3>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter email"
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Enter password"
                onChange={this.onChange}
              />
            </div>

            <button
              type="submit"
              value="Login"
              className="btn btn-primary btn-block"
              onClick={this.login}
            >
              Submit
            </button>
            <p className="forgot-password text-right">
              Forgot <a href="/forgotpassword">password?</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
export default Login;
