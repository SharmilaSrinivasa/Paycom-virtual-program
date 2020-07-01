import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import "./Signup.css";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      redirect: false,
    };
  }

  onChangeFirstName(e) {
    this.setState({
      firstname: e.target.value,
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastname: e.target.value,
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

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
    };
    //console.log(obj);

    axios
      .post("http://localhost:8080/react-php/api/signup.php", obj)
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "created") {
          this.props.handleSuccessfulAuth(res.data);
          this.setState({ redirect: true });
        }
      })
      .catch((error) => {
        console.log("registration error", error);
      });
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="row">
        <div className="column bodypart">
          <Form onSubmit={this.onSubmit}>
            <p className="text-right">
              Already have an account? <a href="/login">Login</a>
            </p>
            <h3>Sign Up</h3>

            <Form.Group controlId="formBasicFirstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First name"
                value={this.state.firstname}
                onChange={this.onChangeFirstName}
              />
            </Form.Group>

            <Form.Group controlId="formBasicLastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last name"
                value={this.state.lastname}
                onChange={this.onChangeLastName}
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
              Sign up
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default Signup;
