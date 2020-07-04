import React, { Component } from "react";
//import { Redirect } from "react-router-dom";
import axios from "axios";
import "./Dashboard.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/react-php/api/view.php")
      .then((response) => {
        this.setState({ events: response.data });
        //console.log("this.state.events: ", this.state.events);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .get(
        "http://localhost:8080/react-php/api/getByEmail.php?id=" +
          this.props.match.params.id
      )
      .then((response) => {
        this.setState({
          user_id: response.data.user_id,
        });
        //console.log("user_id:", this.state.user_id);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  renderTableData() {
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

  register(eventId) {
    //console.log("e:", eventId);
    //console.log("e2:", this.state.user_id);
    let obj = { user_id: this.state.user_id };
    axios
      .post(
        "http://localhost:8080/react-php/api/registerEvent.php?myparam1=" +
          eventId,
        obj
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>Dashboard</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/">Logout</Nav.Link>
          </Navbar.Collapse>
        </Navbar>
        <h4 align="center"> Events List</h4>
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
    );
  }
}
export default Dashboard;
