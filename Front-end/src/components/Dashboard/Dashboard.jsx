import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { viewUnregisteredEvents, registerEvent } from "../../utils/JWTAuth.js";
import "./Dashboard.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
    this.state = {
      events: [],
      redirect: false,
      message: false,
    };
  }

  async componentDidMount() {
    let response = await viewUnregisteredEvents(
      this.props.match.params.emailId
    );
    this.setState({ events: response });
    if (this.state.events.length === 0) {
      this.setState({ message: true });
    }
  }

  renderTableData() {
    if (this.state.events.length === 0 || this.state.events === "0 results") {
      return;
    }
    return this.state.events.map((events, index) => {
      const {
        eventId,
        title,
        event_date,
        event_time,
        location,
        description,
      } = events;
      return (
        <tr key={eventId}>
          <td>{title}</td>
          <td>{event_date}</td>
          <td>{event_time}</td>
          <td>{location}</td>
          <td>{description}</td>
          <td>
            <button
              onClick={() => this.register(eventId)}
              className="btn btn-primary"
            >
              Register
            </button>
          </td>
        </tr>
      );
    });
  }

  async register(eventId) {
    let obj = { user_email: this.props.match.params.emailId };
    let response = await registerEvent(obj, eventId);
    if (response.status === 200) {
      this.setState({ redirect: true });
    }
  }

  render() {
    let user_email = this.props.match.params.emailId;
    let redirect = this.state.redirect;
    let message = this.state.message;
    if (redirect) {
      return <Redirect to={"/registeredevents/" + user_email} />;
    }
    return (
      <div className="image2">
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand>Dashboard</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Link to={"/registeredevents/" + user_email}>
                Registered Events
              </Link>
              <Nav.Link href="/">Logout</Nav.Link>
            </Navbar.Collapse>
          </Navbar>
          <h4 align="center"> Events List</h4>
          <h5 align="center">{message ? "No new events to register" : null}</h5>

          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Title</th>
                <th>Date</th>
                <th>Time</th>
                <th>Location</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>{this.renderTableData()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default Dashboard;
