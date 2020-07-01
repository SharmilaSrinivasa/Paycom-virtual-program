import React, { Component } from "react";
//import axios from "axios";
//import { Redirect } from "react-router-dom";
//import { Link } from "react-router-dom";

class EventsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
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
        <td></td>
      </tr>
    );
  }
}
export default EventsList;
