import React, { Component } from "react";
import "./Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
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
      <div className="row">
        <div className="column bodypart">
          <form>
            <p className="forgot-password text-right">
              Already have an account? <a href="/login">Login</a>
            </p>
            <h3>Sign Up</h3>

            <div className="form-group">
              <label>First name</label>
              <input
                type="text"
                name="firstname"
                className="form-control"
                placeholder="First name"
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label>Last name</label>
              <input
                type="text"
                name="lastname"
                className="form-control"
                placeholder="Last name"
                onChange={this.onChange}
              />
            </div>

            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                className="form-control"
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
              value="Signup"
              className="btn btn-primary btn-block"
              onClick={this.signup}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Signup;
