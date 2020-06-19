import React, { Component } from "react";
import "./Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.signup = this.signup.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  signup() {
    console.log("signup Function");
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }

  render() {
    return (
      <div className="row small-up-2 medium-up-3 large-up-4">
        <div className="column bodypart">
          <p>
            Already have an account?
            <a href="/login" className="button">
              Login
            </a>{" "}
          </p>
          <h3>Signup</h3>
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
            value="Signup"
            className="button"
            onClick={this.signup}
          />
        </div>
      </div>
    );
  }
}

export default Signup;
