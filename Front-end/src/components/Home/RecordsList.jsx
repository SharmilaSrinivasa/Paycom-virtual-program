import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

class RecordList extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.state = {
      redirect: false,
    };
  }

  delete() {
    //console.log("test: " + this.props.obj.eventId);
    axios
      .get(
        "http://localhost:8080/react-php/api/delete.php?id=" +
          this.props.obj.eventId
      )
      .then(this.setState({ redirect: true }))
      .catch((err) => console.log(err));
  }
  render() {
    const { redirect } = this.state;
    //console.log("val: ", redirect);
    if (redirect) {
      return <Redirect to="/home" />;
    }
    return (
      <tr>
        <td>{this.props.obj.title}</td>
        <td>{this.props.obj.event_date}</td>
        <td>{this.props.obj.event_time}</td>
        <td>{this.props.obj.location}</td>
        <td>{this.props.obj.description}</td>
        <td>{this.props.obj.RSVP}</td>
        <td>
          <Link
            to={"/updateevent/" + this.props.obj.eventId}
            className="btn btn-primary"
          >
            Edit
          </Link>
        </td>
        <td>
          <button onClick={this.delete} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
}
export default RecordList;
