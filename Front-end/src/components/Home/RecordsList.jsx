import React, { Component } from "react";
import { deleteEvent } from "../../utils/JWTAuth.js";
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

  async delete() {
    await deleteEvent(this.props.obj.eventId);
    this.setState({ redirect: true });
  }

  render() {
    const { redirect } = this.state;
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
