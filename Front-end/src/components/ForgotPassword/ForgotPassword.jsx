import React, { Component } from "react";
import { forgotPassword } from "../../utils/JWTAuth.js";
import { Form, Button } from "react-bootstrap";
import "./ForgotPassword.css";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      emailStatus: "",
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  async onSubmit(e) {
    e.preventDefault();
    const { email } = this.state;
    let result = await forgotPassword(email);
    if (result) {
      this.setState({ emailStatus: result.data });
    }

    this.setState({
      email: "",
    });
  }

  render() {
    const { email, emailStatus } = this.state;
    return (
      <div>
        <br />
        <div className="image">
          <div className="container">
            <div className="row">
              <br /> <br />
              <div className="col-md-6 offset-md-8">
                <br /> <br />
                {emailStatus ? emailStatus : null}
                <Form onSubmit={this.onSubmit}>
                  <p className="text-right">
                    <a href="/login">Login</a>
                  </p>
                  <br />
                  <p className="card-title">
                    Please enter your email account so we can assist you in
                    recovering your account!
                  </p>
                  <Form.Group>
                    <input
                      type="email"
                      id="email-input"
                      placeholder="Enter email"
                      value={email}
                      onChange={this.onChangeEmail}
                    />
                  </Form.Group>
                  <Button variant="primary" size="lg" block type="submit">
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ForgotPassword;
