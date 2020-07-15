import React, { Component } from "react";
import { getRegisteredEvent } from "../../utils/JWTAuth.js";
import "./RegisteredEvents.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

class RegisteredEvents extends Component {
  constructor(props) {
    super(props);
    this.state = { eventsDetails: [], message: false };
  }

  async componentDidMount() {
    let response = await getRegisteredEvent(this.props.match.params.id);
    this.setState({ eventsDetails: response.data });
    if (this.state.eventsDetails === "0 results") {
      this.setState({ message: true });
    }
  }

  renderTableData() {
    if (
      this.state.eventsDetails.length === 0 ||
      this.state.eventsDetails === "0 results"
    ) {
      return;
    } else {
      return this.state.eventsDetails.map((eventsDetails, index) => {
        const {
          eventId,
          title,
          event_date,
          event_time,
          location,
          description,
        } = eventsDetails;
        return (
          <tr key={eventId}>
            <td>{title}</td>
            <td>{event_date}</td>
            <td>{event_time}</td>
            <td>{location}</td>
            <td>{description}</td>
          </tr>
        );
      });
    }
  }

  render() {
    let message = this.state.message;
    return (
      <div className="image2">
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand>Registered Events</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Link to={"/dashboard/" + this.props.match.params.id}>
                Dashboard
              </Link>
              <Nav.Link href="/">Logout</Nav.Link>
            </Navbar.Collapse>
          </Navbar>
          <h4 align="center"> Events List</h4>
          <h5 align="center">{message ? "No registered Event List" : null}</h5>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>{this.renderTableData()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default RegisteredEvents;
