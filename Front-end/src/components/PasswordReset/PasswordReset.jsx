import React, { Component } from "react";
import { passwordReset } from "../../utils/JWTAuth.js";
import { Form, Button } from "react-bootstrap";
import "./PasswordReset.css";

class PasswordReset extends Component {
  constructor(props) {
    super(props);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      password: "",
      passwordStatus: "",
    };
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  async onSubmit(e) {
    e.preventDefault();
    const obj = { password: this.state.password };
    let result = await passwordReset(obj, this.props.match.params.userEmail);
    console.log(result);
    if (result) {
      //console.log(result.data.message);
      this.setState({ passwordStatus: result.data.message });
    }
    this.setState({
      password: "",
    });
  }

  render() {
    const { password, passwordStatus } = this.state;
    return (
      <div>
        <br />
        <div className="image">
          <div className="container">
            <div className="row">
              <br /> <br />
              <div className="col-md-6 offset-md-8">
                <br /> <br />
                {passwordStatus ? passwordStatus : null}
                <Form onSubmit={this.onSubmit}>
                  <p className="text-right">
                    <a href="/login">Login</a>
                  </p>
                  <br />
                  <p className="card-title">Please enter your new password!</p>
                  <Form.Group>
                    <input
                      type="password"
                      id="password-input"
                      placeholder="Password"
                      value={password}
                      onChange={this.onChangePassword}
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
export default PasswordReset;
