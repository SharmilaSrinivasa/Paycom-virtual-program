import React, { Component } from "react";
import logo from "../../images/Paycom-Generic.png";
import "./Welcome.css";

class Welcome extends Component {
  render() {
    return (
      <div className="row small-up-2">
        <div className="medium-6 columns">
          <h1>Program Planner </h1>
          <h3> Software for everyone! </h3>
          <br />
          <a href="/signup" className="button large">
            SignUp
          </a>
          <a href="/login" className="button large hollow">
            Login
          </a>
        </div>
        <div className="medium-6 columns">
          <img className="thumbnail" src={logo} alt="Planner" />
        </div>
      </div>
    );
  }
}
export default Welcome;
