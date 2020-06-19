import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  login() {
    console.log("Login Function");
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  render() {
    return (
      <div className="row">
        <div className="column bodypart">
          <div className="rightshift">
            <p>
              Don't have an account?{" "}
              <a href="/signup" className="button">
                Signup
              </a>{" "}
            </p>
          </div>

          <h3>Login</h3>
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={this.onChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Login"
            className="button"
            onClick={this.login}
          />
          <a href="/forgotpassword">Forgot password?</a>
        </div>
      </div>
    );
  }
}
export default Login;
