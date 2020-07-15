import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { getEventDetailById, updateEvent } from "../../utils/JWTAuth.js";
import { Redirect } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./UpdateEvent.css";

class UpdateEvent extends Component {
  constructor(props) {
    super(props);
    this.onChangeEventTitle = this.onChangeEventTitle.bind(this);
    this.onChangeEventDate = this.onChangeEventDate.bind(this);
    this.onChangeEventTime = this.onChangeEventTime.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      event_title: "",
      event_date: "",
      event_time: "",
      location: "",
      description: "",
      redirect: false,
    };
  }

  async componentDidMount() {
    let response = await getEventDetailById(this.props.match.params.id);
    this.setState({
      event_title: response.data.title,
      event_date: response.data.event_date,
      event_time: response.data.event_time,
      location: response.data.location,
      description: response.data.description,
    });
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

  async onSubmit(e) {
    e.preventDefault();
    const obj = {
      event_title: this.state.event_title,
      event_date: this.state.event_date,
      event_time: this.state.event_time,
      location: this.state.location,
      description: this.state.description,
    };
    let response = await updateEvent(obj, this.props.match.params.id);
    if (response.status === 200) {
      this.setState({ redirect: true });
    } else {
      alert("Event date and time already exists!");
    }
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="image2">
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand>Update Event</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/">Logout</Nav.Link>
            </Navbar.Collapse>
          </Navbar>
          <div className="container">
            <div className="col-xs-8">
              <br /> <br />
              <Form onSubmit={this.onSubmit}>
                <Form.Row>
                  <Form.Group as={Col}>
                    <Form.Label>Event Title</Form.Label>
                    <input
                      type="text"
                      id="title-input"
                      value={this.state.event_title}
                      onChange={this.onChangeEventTitle}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridStartDate">
                    <Form.Label>Date</Form.Label>
                    <input
                      type="date"
                      id="date-input"
                      value={this.state.event_date}
                      onChange={this.onChangeEventDate}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridTime">
                    <Form.Label>Time</Form.Label>
                    <input
                      type="text"
                      id="time-input"
                      value={this.state.event_time}
                      onChange={this.onChangeEventTime}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridLocation">
                    <Form.Label>Location</Form.Label>
                    <input
                      type="text"
                      id="location-input"
                      value={this.state.location}
                      onChange={this.onChangeLocation}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    id="textarea-input"
                    rows="3"
                    value={this.state.description}
                    onChange={this.onChangeDescription}
                  />
                </Form.Group>
                <br />

                <Button variant="primary" size="lg" block type="submit">
                  Update
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UpdateEvent;
