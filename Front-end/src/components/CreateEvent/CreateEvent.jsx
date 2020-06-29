import React, { Component } from "react";
import {
  Form,
  Button,
  Col,
  //FormGroup,
  //FormControl,
  //ControlLabel,
} from "react-bootstrap";
import axios from "axios";

class CreateEvent extends Component {
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
    };
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

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      event_title: this.state.event_title,
      event_date: this.state.event_date,
      event_time: this.state.event_time,
      location: this.state.location,
      description: this.state.description,
    };
    console.log(obj);

    axios
      .post("http://localhost:8080/react-php/api/insert.php", obj)
      .then((res) => {
        console.log(res.data);
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
      <div className="row">
        <div className="column bodypart">
          <h1>Create Event</h1>
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
                  value={this.state.time}
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

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
export default CreateEvent;
