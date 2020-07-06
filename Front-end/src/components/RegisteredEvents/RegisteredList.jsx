import React, { Component } from "react";

class RegisteredList extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.state = {
      //redirect: false,
    };
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.title}</td>
        <td>{this.props.obj.event_date}</td>
        <td>{this.props.obj.event_time}</td>
        <td>{this.props.obj.location}</td>
        <td>{this.props.obj.description}</td>
      </tr>
    );
  }
}
export default RegisteredList;
