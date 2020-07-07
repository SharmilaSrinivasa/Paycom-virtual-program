import React, { Component } from "react";
//import { Redirect } from "react-router-dom";
import axios from "axios";
import "./Home.css";
import RecordsList from "./RecordsList";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/react-php/api/view.php")
      .then((response) => {
        this.setState({ events: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  eventsList() {
    return this.state.events.map(function (object, i) {
      return <RecordsList obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand>Home</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="/createevent">Create</Nav.Link>
            <Nav.Link href="/">Logout</Nav.Link>
          </Navbar.Collapse>
        </Navbar>
        <h3 align="center"> Events List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
              <th>Description</th>
              <th>Attendees</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.eventsList()}</tbody>
        </table>
      </div>
    );
  }
}
export default Home;
////
