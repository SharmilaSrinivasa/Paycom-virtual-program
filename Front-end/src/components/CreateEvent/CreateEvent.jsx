import React, { Component } from "react";
import {
  Form,
  Button,
  Col,
  FormGroup,
  FormControl,
  ControlLabel,
} from "react-bootstrap";

class CreateEvent extends Component {
  render() {
    return (
      <div className="row">
        <div className="column bodypart">
          <h1>Create Event</h1>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEvent">
                <Form.Label>Event Title</Form.Label>
                <Form.Control type="text" placeholder="Enter event title" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridGuest">
                <Form.Label>Add Guest</Form.Label>
                <Form.Control as="select" defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridStartDate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridEndtDate">
                <Form.Label>End Date</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridTime">
                <Form.Label>Time</Form.Label>
                <Form.Control type="time" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridLocation">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" placeholder="Enter location" />
              </Form.Group>
            </Form.Row>

            <Form.Group controlId="formGridDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows="3" />
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
