import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { login } from "../../utils/JWTAuth.js";
import "./Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      role: "",
      email: "",
      password: "",
      redirect: false,
    };
  }

  onChangeRole(e) {
    this.setState({
      role: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  async onSubmit(e) {
    e.preventDefault();
    const obj = {
      role: this.state.role,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(obj);
    let obj1 = await login(obj);
    //  this.setState({ redirect: true });
    // var arr = obj1.split(",");
    //  var arr1 = JSON.parse(arr);
    // this.setState({ role: arr1.role });
    console.log("obj1: ", obj1);
  }

  render() {
    let redirect = this.state.redirect;
    let role = this.state.role;
    if (redirect && role === "Admin") {
      return <Redirect to="/home" />;
    } else if (redirect && role === "User") {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div className="container">
        <div className="col-xs-8">
          <div className="card">
            <div className="card-body">
              <Form onSubmit={this.onSubmit}>
                <p className="text-right">
                  Don't have an account? <a href="/signup">Signup</a>
                </p>
                <h3>Login</h3>

                <Form.Group controlId="formBasicRole">
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    type="tex"
                    placeholder="Admin/User"
                    value={this.state.role}
                    onChange={this.onChangeRole}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                  />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Login
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
