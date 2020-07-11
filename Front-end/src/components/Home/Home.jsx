import React, { Component } from "react";
import axios from "axios";
import "./Home.css";
import RecordsList from "./RecordsList";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

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
        this.setState({ emailId: this.props.match.params.emailId });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  eventsList() {
    if (this.state.events.length === 0 || this.state.events === "0 results[]") {
      return;
    }
    return this.state.events.map(function (object, i) {
      return <RecordsList obj={object} key={i} />;
    });
  }

  render() {
    return (
      <div className="image2">
        <div>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand>Home</Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Link to={"/createevent"}>Create</Link>
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
      </div>
    );
  }
}
export default Home;
