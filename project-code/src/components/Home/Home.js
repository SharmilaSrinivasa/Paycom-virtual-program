import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="column bodypart">
          <div className="rightshift">
            <a href="/" className="button">
              Logout
            </a>
          </div>
          <table className="searchclass">
            <tr>
              <td>
                <a href="/createevent" className="button">
                  Create Event
                </a>
              </td>
              <td>
                <input type="text" name="event" placeholder="Event Title" />
              </td>
              <td>
                <input type="submit" value="Search" className="button" />
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}
export default Home;
