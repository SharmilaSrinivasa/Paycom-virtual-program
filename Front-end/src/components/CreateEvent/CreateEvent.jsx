import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class CreateEvent extends Component {
  constructor(props) {
    super(props);
    this.onChangeEventTitle = this.onChangeEventTitle.bind(this);
    this.onChangeEventDate = this.onChangeEventDate.bind(this);
    this.onChangeEventTime = this.onChangeEventTime.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onReset = this.onReset.bind(this);

    this.initialState = {
      event_title: "",
      event_date: "",
      event_time: "",
      location: "",
      description: "",
    };

    this.state = this.initialState;
  }

  onChangeEventTitle(e) {
    this.setState({
      event_title: e.target.value,
    });
  }

  onChangeEventDate(e) {
    this.setState({
      event_date: e.target.value,
    });
  }

  onChangeEventTime(e) {
    this.setState({
      event_time: e.target.value,
    });
  }

  onChangeLocation(e) {
    this.setState({
      location: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onReset(e) {
    e.preventDefault();
    this.setState(this.initialState);
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      event_title: this.state.event_title,
      event_date: this.state.event_date,
      event_time: this.state.event_time,
      location: this.state.location,
      description: this.state.description,
    };
    axios
      .post("http://localhost:8080/react-php/api/insert.php", obj)
      .then((res) => {
        if (res.status === 200) {
          alert("event created successfully!");
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("Date and time already exists!");
      });

    this.setState({
      event_title: "",
      event_date: "",
      event_time: "",
      location: "",
      description: "",
    });
  }

  render() {
    return (
      <div className="image2">
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand>Create Event</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Link to={"/home"}>Home</Link>
              <Nav.Link href="/">Logout</Nav.Link>
            </Navbar.Collapse>
          </Navbar>
          <div className="container">
            <div className="col-xs-8">
              <br /> <br />
              <Form onSubmit={this.onSubmit}>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEvent">
                    <Form.Label>Event Title</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter event title"
                      value={this.state.event_title}
                      onChange={this.onChangeEventTitle}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridStartDate">
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="date"
                      value={this.state.event_date}
                      onChange={this.onChangeEventDate}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEndtDate">
                    <Form.Label>Time</Form.Label>
                    <Form.Control
                      type="time"
                      value={this.state.event_time}
                      onChange={this.onChangeEventTime}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridLocation">
                    <Form.Label>Location</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter location"
                      value={this.state.location}
                      onChange={this.onChangeLocation}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridDescription">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows="3"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                  />
                </Form.Group>
                <br />
                <Button variant="primary" size="lg" block type="submit">
                  Submit
                </Button>
                <Button
                  variant="primary"
                  size="lg"
                  block
                  type="button"
                  onClick={this.onReset}
                >
                  Reset
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CreateEvent;
