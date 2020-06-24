import React, { Component } from "react";
import "./Home.css";
import { Redirect } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
    };
    this.logout = this.logout.bind(this);
  }

  componentWillMount() {
    if (sessionStorage.getItem("userData")) {
      console.log("home feed");
    } else {
      this.setState({ redirectToReferrer: true });
    }
  }

  logout() {
    sessionStorage.setItem("userData", "");
    sessionStorage.clear();
    this.setState({ redirectToReferrer: true });
  }

  render() {
    if (this.state.redirectToReferrer) {
      return <Redirect to={"/login"} />;
    }

    return (
      <div className="row">
        <div className="column bodypart">
          <div className="rightshift">
            <a href="/" onClick={this.logout} className="button">
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
