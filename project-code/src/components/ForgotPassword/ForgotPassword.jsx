import React, { Component } from "react";
import "./ForgotPassword.css";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.reset = this.reset.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  reset() {
    console.log("reset Function");
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  }
  render() {
    return (
      <div className="row small-up-2 medium-up-3">
        <div className="column bodypart">
          <form>
            <h3>Reset Password</h3>
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
            <button
              type="submit"
              value="Login"
              className="btn btn-primary btn-block"
              onClick={this.login}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default ForgotPassword;
