import React, { Component } from "react";

class RecordList extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.obj.title}</td>
        <td>{this.props.obj.event_date}</td>
        <td>{this.props.obj.event_time}</td>
        <td>{this.props.obj.location}</td>
        <td>{this.props.obj.description}</td>
        <td>
          <button className="btn btn-primary">Edit</button>
        </td>
        <td>
          <button className="btn btn-primary">Delete</button>
        </td>
      </tr>
    );
  }
}
export default RecordList;
