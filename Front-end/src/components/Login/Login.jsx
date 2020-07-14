import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { login } from "../../utils/JWTAuth.js";
import "./Login.css";

const ROLE = ["User", "Admin"];

class Login extends Component {
  constructor(props) {
    super(props);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      role: ROLE[0],
      email: "",
      password: "",
      redirect: false,
      errorMessage: "",
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
    let result = await login(obj);
    if (result === undefined) {
      alert("Login error, check your email and password");
    } else {
      this.setState({ redirect: true });
      var arr = result.split(",");
      var arr1 = JSON.parse(arr);
      this.setState({ role: arr1.role });
      this.setState({ email: arr1.email });
    }
  }

  render() {
    let redirect = this.state.redirect;
    let role = this.state.role;
    let email = this.state.email;
    if (redirect && role === "Admin") {
      return <Redirect to="/home" />;
    } else if (redirect && role === "User") {
      return <Redirect to={"/dashboard/" + email} />;
    }
    return (
      <div className="image">
        <div className="container">
          <div className="row">
            <br /> <br />
            <div className="col-md-6 offset-md-8">
              <br /> <br />
              <Form onSubmit={this.onSubmit}>
                <p className="text-right">
                  Don't have an account? <a href="/signup">Signup</a>
                </p>
                <h3>Login</h3>

                <Form.Group controlId="formBasicRole">
                  <Form.Label>Role</Form.Label>
                  <select value={this.state.role} onChange={this.onChangeRole}>
                    {ROLE.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
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
                <p className="text-right">
                  Forgot <a href="/forgotpassword">Password</a>
                </p>

                <Button variant="primary" size="lg" block type="submit">
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
