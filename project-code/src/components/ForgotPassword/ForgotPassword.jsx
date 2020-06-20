import React, { Component } from "react";
import "./ForgotPassword.css";

class ForgotPassword extends Component {
  render() {
    return (
      <div className="row small-up-2 medium-up-3">
        <div className="column bodypart">
          <h3>Reset Password</h3>
          <label>Email</label>
          <input type="text" name="email" placeholder="Email" />
          <input type="submit" value="Submit" className="button" />
        </div>
      </div>
    );
  }
}
export default ForgotPassword;
