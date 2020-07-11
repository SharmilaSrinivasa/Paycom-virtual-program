import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./Welcome.css";

class Welcome extends Component {
  render() {
    return (
      <div className="image">
        <div className="container">
          <div className="row">
            <br /> <br />
            <div className="col-md-6 offset-md-10">
              <br /> <br />
              <h1>Program Planner </h1>
              <h3> Paycom's program planner is for the our interns </h3>
              <br />
              <Button href="/signup" size="lg">
                SignUp
              </Button>{" "}
              <Button href="/login" variant="outline-primary" size="lg">
                Login
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Welcome;
