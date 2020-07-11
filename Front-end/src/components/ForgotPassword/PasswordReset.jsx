import React, { Component } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import "./ForgotPassword.css";

class ForgotPassword extends Component {
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

  onSubmit(e) {
    e.preventDefault();
    const obj = { password: this.state.password };
    axios
      .post(
        "http://localhost:8080/react-php/api/resetPassword.php?sendto=" +
          this.props.match.params.userEmail,
        obj
      )
      .then((res) => {
        this.setState({ passwordStatus: res.data });
      })
      .catch(function (error) {
        console.log(error);
      });
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
                  <Form.Group controlId="formBasicPassword">
                    <Form.Control
                      type="password"
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
export default ForgotPassword;
